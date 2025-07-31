import path from "path";
import nodemailer from "nodemailer";

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

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_APP_USER,
    pass: process.env.NEXT_PUBLIC_APP_PASSWORD,
  },
});

const sendEmail = async (email) => {
  const emailHtml = `
  <p>Dear sir/madam,</p>
  
  <p>I hope this message finds you well.</p>
  
  <p>
    My name is <strong>Aditya Ashok Mane</strong>, and I am writing to express my interest in any suitable openings in your organization for the role of a React.js, Next.js Developer, or Frontend Developer.
  </p>
  
  <p>
    I have completed my graduation in Bachelor of Science in Information Technology from Nirmala Memorial Foundation College, Kandivali (Mumbai). Most recently, I completed an internship at Oneroof Technologies where I worked as a React.js Developer. During my internship, I had the opportunity to contribute to live projects and strengthen my technical skills, including React.js, Next.js, Git, Bitbucket, and basic SEO.
  </p>
  
  <p>
    I have attached my resume for your review. I would be grateful for the opportunity to discuss any potential roles you might have that align with my skills and interests.
  </p>
  
  <p>
    Thank you for your time and consideration. I look forward to hearing from you.
  </p>
  
  <p>
    Warm regards,<br>
    <strong>Aditya Ashok Mane</strong><br>
    📧 Email: <a href="mailto:adityamane27023@gmail.com">adityamane27023@gmail.com</a><br>
    📱 Phone: +91 9326549507<br>
    🌐 GitHub: <a href="https://github.com/Aditya-Mane007" target="_blank" rel="noopener noreferrer">github.com/Aditya-Mane007</a><br>
    🔗 LinkedIn: <a href="https://www.linkedin.com/in/aditya-mane-73ab47359/" target="_blank" rel="noopener noreferrer">linkedin.com/in/aditya-mane-73ab47359/</a>
  </p>
`;

  const res = await transporter.sendMail({
    from: `Aditya Ashok Mane <${process.env.APP_USER}>`,
    to: email,
    subject: "Application for React.js Developer / Frontend Developer Position",
    html: emailHtml,
    attachments: [
      {
        filename: "ADITYA_MANE_RESUME.pdf",
        path: path.join(process.cwd(), "public", "ADITYA_MANE_RESUME.pdf"),
        contentType: "application/pdf",
      },
    ],
  });
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  try {
    const sendResults = await Promise.all(
      emails.map((email) =>
        sendEmail(email)
          .then(() => ({ email, success: true }))
          .catch((error) => ({ email, success: false, error: error.message }))
      )
    );

    return res.status(200).json({
      message: "Email sending complete.",
      results: sendResults,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
