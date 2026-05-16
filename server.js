import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "yashasvihealthcaredvg@gmail.com",
    pass: process.env.EMAIL_PASS, // App password goes here
  },
});

// API Endpoint to handle contact form submissions
app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, doctor, preferredDate, message } = req.body;

    // Validate inputs (basic)
    if (!name || !phone || !doctor || !preferredDate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Set up email data
    const mailOptions = {
      from: `"Yashasvi Health Care Website" <${process.env.EMAIL_USER || "yashasvihealthcaredvg@gmail.com"}>`,
      to: "yashasvihealthcaredvg@gmail.com",
      subject: `New Appointment Request from ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Requested Doctor:</strong> ${doctor}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Message/Reason for Visit:</strong><br/> ${message || "No message provided."}</p>
        <br/>
        <p><em>This email was generated automatically from the Yashasvi Health Care website contact form.</em></p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

// Serve static files from the React app (Hostinger Production Setup)
app.use(express.static(path.join(__dirname, "dist", "public")));

// Catch-all handler to serve index.html for any other requests (React Router support)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
