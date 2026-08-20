# Send Her a Note — Vercel Deploy Guide

Type a message, hit send, it arrives as a real text on her phone. Hosted free on Vercel.

## Folder structure
```
public/index.html      → the page you see and type into
api/send-message.js    → serverless function that sends the SMS via Twilio
package.json           → tells Vercel to install the twilio package
```

## Step 1 — Get a free Twilio account
1. Sign up at https://www.twilio.com/try-twilio
2. From your Twilio Console, copy:
   - **Account SID**
   - **Auth Token**
   - Your **Twilio phone number**
3. Trial accounts can only text numbers you've verified. In the Console, go to **Phone Numbers → Verified Caller IDs** and add her number there (she'll get a one-time verification call/text from Twilio to confirm it's really her number).

## Step 2 — Push this project to GitHub
1. Create a free account at https://github.com if you don't have one.
2. Create a new repository (e.g. `send-her-a-note`).
3. Upload these files to it — either drag-and-drop them in the GitHub web UI, or:
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/send-her-a-note.git
   git push -u origin main
   ```

## Step 3 — Deploy on Vercel
1. Create a free account at https://vercel.com — sign up with your GitHub account, it's the easiest option.
2. Click **Add New → Project**, then pick the repo you just pushed.
3. Before deploying, open **Environment Variables** and add:
   | Name | Value |
   |---|---|
   | `TWILIO_ACCOUNT_SID` | (from Twilio) |
   | `TWILIO_AUTH_TOKEN` | (from Twilio) |
   | `TWILIO_PHONE_NUMBER` | your Twilio number, e.g. `+15017122661` |
4. Click **Deploy**. In under a minute you'll get a live URL like `send-her-a-note.vercel.app`.

## Step 4 — Use it
Open your Vercel URL on your phone, type her number and a message, hit send. It arrives as a normal text message.

## Notes
- Never put your Twilio keys directly in the code — always use Vercel's Environment Variables, exactly like above. That's what keeps them private.
- Trial credit runs out eventually; after that, Twilio charges a small amount per message (varies by country).
- Any time you push a code change to GitHub, Vercel automatically redeploys the live site.
