
import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 20_000;
const MAX_INTERESTS = 20;

const ALLOWED_INTERESTS = new Set([
  "Generative AI & LLM Solutions",
  "AI Agents & Automation",
  "Custom Software Development",
  "Websites & Digital Platforms",
  "Machine Learning & Data",
  "Systems & AI Integration",
]);

const ALLOWED_BUDGETS = new Set([
  "",
  "Under $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Not sure yet",
]);

const ALLOWED_REFERRALS = new Set([
  "",
  "Google or other search engine",
  "AI assistant",
  "LinkedIn",
  "Social media",
  "Word of mouth / referral",
  "Other",
]);

function cleanText(
  value: unknown,
  maxLength: number
): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const text = value.trim();

  if (text.length > maxLength) {
    return null;
  }

  return text;
}

function isValidEmail(email: string): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(email);
}

function jsonError(
  message: string,
  status: number
) {
  return NextResponse.json(
    { ok: false, error: message },
    { status }
  );
}

export async function POST(req: Request) {
  try {
    // Validate request content type.
    const contentType =
      req.headers.get("content-type") ?? "";

    if (
      !contentType
        .toLowerCase()
        .includes("application/json")
    ) {
      return jsonError(
        "Content-Type must be application/json",
        415
      );
    }

    // Reject oversized submissions.
    const rawBody = await req.text();

    if (
      Buffer.byteLength(rawBody, "utf8") >
      MAX_BODY_BYTES
    ) {
      return jsonError(
        "Request is too large",
        413
      );
    }

    // Parse JSON safely.
    let body: unknown;

    try {
      body = JSON.parse(rawBody);
    } catch {
      return jsonError("Invalid JSON", 400);
    }

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return jsonError(
        "Invalid submission",
        400
      );
    }

    const data = body as Record<string, unknown>;

    // Clean and validate submitted fields.
    const name = cleanText(data.name, 120);
    const email = cleanText(data.email, 254);

    const company = cleanText(
      data.company ?? "",
      150
    );

    const dialCode = cleanText(
      data.dialCode ?? "",
      10
    );

    const phone = cleanText(
      data.phone ?? "",
      30
    );

    const goals = cleanText(
      data.goals,
      5000
    );

    const budget = cleanText(
      data.budget ?? "",
      50
    );

    const referral = cleanText(
      data.referral ?? "",
      150
    );

    if (
      name === null ||
      email === null ||
      company === null ||
      dialCode === null ||
      phone === null ||
      goals === null ||
      budget === null ||
      referral === null
    ) {
      return jsonError(
        "Invalid field values",
        400
      );
    }

    // Required fields.
    if (!name || !email || !goals) {
      return jsonError(
        "Name, email, and project details are required",
        400
      );
    }

    if (!isValidEmail(email)) {
      return jsonError(
        "Invalid email address",
        400
      );
    }

    // Validate optional selections.
    if (!ALLOWED_BUDGETS.has(budget)) {
      return jsonError(
        "Invalid budget selection",
        400
      );
    }

    if (!ALLOWED_REFERRALS.has(referral)) {
      return jsonError(
        "Invalid referral selection",
        400
      );
    }

    if (
      data.interests !== undefined &&
      (
        !Array.isArray(data.interests) ||
        data.interests.length > MAX_INTERESTS ||
        data.interests.some(
          (item: unknown) =>
            typeof item !== "string" ||
            !ALLOWED_INTERESTS.has(item)
        )
      )
    ) {
      return jsonError(
        "Invalid service selection",
        400
      );
    }

    const interests = Array.isArray(data.interests)
    ? Array.from(new Set(data.interests as string[]))
          .join(", ")
      : "";

    // Validate Google Sheets configuration.
    const clientEmail =
      process.env.GOOGLE_CLIENT_EMAIL;

    const privateKey =
      process.env.GOOGLE_PRIVATE_KEY;

    const spreadsheetId =
      process.env.GOOGLE_SHEET_ID;

    if (
      !clientEmail ||
      !privateKey ||
      !spreadsheetId
    ) {
      console.error(
        "Connect API: Missing Google Sheets configuration."
      );

      return jsonError(
        "Contact service temporarily unavailable",
        503
      );
    }

    // Prepare submission.
    const submission = {
      receivedAt: new Date().toISOString(),
      name,
      company,
      email,
      phone: phone
        ? `${dialCode} ${phone}`.trim()
        : "",
      interests,
      budget,
      referral,
      goals,
    };

    // Authenticate using Google service account.
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    // Save the lead to Google Sheets.
    const result =
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:I",
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        requestBody: {
          values: [
            [
              submission.receivedAt,
              submission.name,
              submission.company,
              submission.email,
              submission.phone,
              submission.interests,
              submission.budget,
              submission.referral,
              submission.goals,
            ],
          ],
        },
      });

    // Confirm Google Sheets reported an inserted row.
    const updatedRows =
      result.data.updates?.updatedRows ?? 0;

    if (updatedRows < 1) {
      console.error(
        "Connect API: Google Sheets did not confirm an inserted row."
      );

      return jsonError(
        "Unable to save your message",
        502
      );
    }

    console.info(
      "Connect API: Submission saved successfully."
    );

    return NextResponse.json(
      {
        ok: true,
        message: "Message received",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Connect API: Submission failed.",
      error instanceof Error
        ? error.message
        : "Unknown error"
    );

    return jsonError(
      "Unable to process your message",
      500
    );
  }
}
