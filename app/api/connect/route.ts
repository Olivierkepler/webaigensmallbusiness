// app/api/connect/route.ts

import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      dialCode,
      phone,
      goals,
      budget,
      interests,
      referral,
    } = body ?? {};

    if (!name || !email || !goals) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const submission = {
      receivedAt: new Date().toLocaleString(),
      name,
      company: company || "",
      email,
      phone: phone ? `${dialCode ?? ""} ${phone}`.trim() : "",
      interests: Array.isArray(interests) ? interests.join(", ") : "",
      budget: budget || "",
      referral: referral || "",
      goals,
    };

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:I",
      valueInputOption: "RAW",
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

    console.log("Lead saved to Google Sheet:", submission);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("connect form error:", err);

    return NextResponse.json(
      { error: "Failed to save lead" },
      { status: 500 }
    );
  }
}