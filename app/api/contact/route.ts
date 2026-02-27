import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Ensure this route runs in the Node.js runtime so native Node modules work
export const runtime = "nodejs";

/**
 * Configure NodeMailer transporter
 * Using Gmail SMTP as an example
 */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,          // 465 for secure SMTP
  secure: true,       // must be true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    // Get form data from frontend
    const { name, email, subject, message } = await req.json();

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,          // Sender (from form)
      to: process.env.EMAIL_USER,            // Your email
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}