// app/api/connect/route.ts
// No email provider yet — this version just validates and logs submissions.
// The form UX (loading spinner -> success panel) works fully.

import { NextResponse } from "next/server";

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

    // Minimal server-side validation
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
      receivedAt: new Date().toISOString(),
      name,
      company: company || null,
      email,
      phone: phone ? `${dialCode ?? ""} ${phone}`.trim() : null,
      interests: Array.isArray(interests) ? interests : [],
      budget: budget || null,
      referral: referral || null,
      goals,
    };

    // For now: visible in your terminal running `next dev`
    // (and in Vercel function logs once deployed)
    console.log("📩 New connect submission:\n", JSON.stringify(submission, null, 2));

    /* ── LATER: plug in Resend here ─────────────────────────────
    import { Resend } from "resend";                // top of file
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "WebAiGen <hello@webaigen.com>",
      to: ["hello@webaigen.com"],
      replyTo: email,
      subject: `New inquiry — ${name}`,
      text: JSON.stringify(submission, null, 2),
    });
    ─────────────────────────────────────────────────────────── */

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("connect form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}