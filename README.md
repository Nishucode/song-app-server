Song App Backend
Overview
The Song App Backend is a Node.js/Express server that powers the Song App, a music streaming application. It handles user authentication (register/login with "Remember Me"), song data storage, and favorite song management. The backend connects to MongoDB Atlas for data persistence and integrates with the Song App Frontend (React) to provide a full-stack music experience with Spotify embeds.
Features

User Authentication: Register and login with email/password, supporting "Remember Me" with customizable token expiry (1 hour, 30 days, 6 months, or forever).
Song Management: Stores and retrieves song metadata from MongoDB Atlas.
Favorites: Allows users to save favorite songs.
Security: Uses bcryptjs for password hashing, jsonwebtoken for JWTs, and express-validator for input validation.
Deployment: Hosted on Render (https://song-app-server.onrender.com).

Prerequisites

Node.js: Version 22.15.0 or higher.
MongoDB Atlas: A free-tier cluster for database storage.
GitHub Account: For repository management.
Render Account: For deployment.
Spotify Account: Required to access music via Spotify embeds in the frontend.

Setup Instructions

Clone the Repository:
git clone https://github.com/Nishucode/song-app-server.git
cd song-app-server


Install Dependencies:
npm install

Dependencies include express, mongoose, bcryptjs, jsonwebtoken, express-validator, cors, and dotenv.

Configure Environment Variables:

Create a .env file in the root directory.

Add:
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/songapp?retryWrites=true&w=majority
JWT_SECRET=<your-secret-key>


Replace <username>, <password>, and <cluster> with your MongoDB Atlas credentials (e.g., songappnewuser, securepassword789, songappnewcluster.abc123.mongodb.net).

Generate a secure JWT_SECRET (e.g., a 64-character random string).



Run Locally:
npm start


Uses nodemon for auto-restart.
Server runs on http://localhost:5000.
Expected logs: Server running on port 5000 and MongoDB Connected.


Deploy to Render:

Create a Render account and link your GitHub repository.
Set up a new Web Service:
Repository: Nishucode/song-app-server.
Runtime: Node.
Build Command: npm install.
Start Command: npm start.


Add environment variables in Render’s dashboard (same as .env).
Deploy and verify logs.



Security Precautions

Sensitive Data: Never commit .env or config/default.json to GitHub. Ensure .gitignore includes:
node_modules/
.env
config/


MongoDB Atlas:

Use a strong password for the database user (songappnewuser).
Restrict Network Access to specific IPs in production (e.g., Render’s IP instead of 0.0.0.0/0).


JWT Secret: Keep JWT_SECRET confidential to prevent token forgery.

HTTPS: Ensure Render uses HTTPS for secure API calls.

Regular Backups: Export songapp.users and songapp.songs collections via MongoDB Compass to /backup.


Troubleshooting

ENOTFOUND Error: Verify MONGO_URI cluster endpoint and network access in Atlas.
Authentication Failed: Check songappnewuser password in MONGO_URI.
Slow Registration: Render’s free tier may cause cold start delays. Use a service like UptimeRobot to ping /health every 10 minutes.
Logs: Check Render logs for errors (e.g., MongoServerError).

Disclaimer

Study Purpose Only: This project is intended for educational and learning purposes only. It is not designed or licensed for commercial use.
Spotify Account Required: A valid Spotify account is required to listen to music, as the app uses Spotify embeds for streaming. Ensure compliance with Spotify’s Terms of Service.
No Warranty: The software is provided "as is" without any warranties, express or implied. Use at your own risk.
Data Privacy: Do not store sensitive personal data in the songapp database. Ensure compliance with data protection laws (e.g., GDPR, CCPA) if applicable.
Third-Party Services: The app relies on MongoDB Atlas, Render, and Spotify. Review their respective terms and privacy policies.

Contributing
Contributions are welcome for educational purposes. Please:

Fork the repository.
Create a feature branch (git checkout -b feature/YourFeature).
Commit changes (git commit -m 'Add YourFeature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.

License
MIT License - Free to use, modify, and distribute for non-commercial educational purposes.


Author: Nishu (Nishucode)
GitHub: github.com/Nishucode
