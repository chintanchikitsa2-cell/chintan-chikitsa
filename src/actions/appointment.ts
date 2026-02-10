"use server";

import { sendMail } from "@/lib/nodemailer";

type BookingPayload = {
  name: string;
  phone: string;
  email?: string;
  note?: string;
  therapy: string;
  date?: Date;
  slot?: string;
};

export async function bookAppointment(data: BookingPayload) {

  const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        background: #f9fafb;
        padding: 24px;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        background: white;
        border-radius: 10px;
        padding: 24px;
        border: 1px solid #e5e7eb;
      }

      h1 {
        font-size: 20px;
        margin-bottom: 16px;
      }

      .section {
        margin-top: 20px;
      }

      .row {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px dashed #e5e7eb;
      }

      .label {
        font-weight: 600;
        color: #374151;
      }

      .value {
        color: #111827;
      }

      .note {
        margin-top: 8px;
        padding: 12px;
        background: #f3f4f6;
        border-radius: 6px;
        white-space: pre-wrap;
      }

      .footer {
        margin-top: 28px;
        font-size: 12px;
        color: #6b7280;
        text-align: center;
      }
    </style>
  </head>

  <body>
    <div class="container">

      <h1>📅 New Appointment Booked</h1>

      <div class="section">

        <div class="row">
          <span class="label">Name</span>
          <span class="value">${data.name}</span>
        </div>

        <div class="row">
          <span class="label">Phone</span>
          <span class="value">${data.phone}</span>
        </div>

        <div class="row">
          <span class="label">Email</span>
          <span class="value">${data.email || "Not Provided"}</span>
        </div>

      </div>

      <div class="section">

        <div class="row">
          <span class="label">Therapy</span>
          <span class="value">${data.therapy}</span>
        </div>

        <div class="row">
          <span class="label">Date</span>
          <span class="value">
            ${data.date
      ? new Date(data.date).toLocaleDateString()
      : "Not Selected"}
          </span>
        </div>

        <div class="row">
          <span class="label">Slot</span>
          <span class="value">${data.slot || "—"}</span>
        </div>

      </div>

      <div class="section">
        <p class="label">Client Note</p>
        <div class="note">
          ${data.note || "No note provided."}
        </div>
      </div>

      <div class="footer">
        This booking was submitted from the website booking system.
      </div>

    </div>
  </body>
</html>
`;


  await sendMail({
    to: process.env.SMTP_FROM as string,
    subject: "New Appointment Booking",
    html: html,
  });

  return { success: true };
}
