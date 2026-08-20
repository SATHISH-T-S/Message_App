// Vercel serverless function — runs at /api/send-message
// Reads Twilio keys from environment variables (set these in the Vercel dashboard, not in code).

const twilio = require("twilio");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { to, body } = req.body;

  if (!to || !body) {
    return res.status(400).json({ error: "Missing phone number or message." });
  }

  try {
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    await client.messages.create({
      to,                                     // her number, e.g. "+919876543210"
      from: process.env.TWILIO_PHONE_NUMBER,   // your Twilio number, e.g. "+15017122661"
      body,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Could not send message." });
  }
};
