import { sendEmail } from "@/utils/utils";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const emails = [
    // "hr@promodome.in",
    // "hire-me@gophygital.io",
    // "info@graymatrix.com",
    // "contact@amagi.io",
    // "info@insigniacom.com",
    // "mumbai@inkincaps.com",
    // "hr@bondsindia.com",
    // "careers@locobuzz.com",
    // "careers@fabstudio.co",
    // "info@qpsit.com",
    // "info@parashifttech.com",
    // "joinus@crimsoni.com",
    // "careers@digitaledgetech.in",
    // "hrd@esoftech.com",
    "maneaditya006@gmail.com",
    "thingsrandom966@gmail.com",
  ];

  for (let email of emails) {
    try {
      const res = await sendEmail(email);
      console.log(`Email sent to ${email}`);
    } catch (error) {
      console.error(`Failed to send email to ${email} :`, error);
    }
  }

  res.status(200).end("Hello Cron!");
}
