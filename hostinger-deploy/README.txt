YASHASVI HEALTH CARE — HOSTINGER DEPLOYMENT GUIDE
===================================================

STEP 1: Upload this folder to Hostinger
- Upload the entire contents of this folder to your Hostinger Node.js app root

STEP 2: Install dependencies
- In Hostinger's terminal or SSH, run:
  npm install

STEP 3: Set the startup file
- In Hostinger's Node.js settings, set the startup file to: server.js

STEP 4: Start the app
- Hostinger will run: npm start
- Your site will be live on your domain!

NOTES:
- The "public" folder contains all built website files — do not delete it
- No build step needed — everything is pre-built
- The server automatically handles all React Router routes (no 404 errors)
