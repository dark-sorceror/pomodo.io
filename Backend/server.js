const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;

require("dotenv").config();

const { errorHandler } = require("./middleware/errorHandler");
const connectDatabase = require("./db/database");
const User = require("./models/user");

const app = express();

// CORS Configuration (fix the origin URL)
const corsOptions = {
    origin: "http://localhost:3000",  // No trailing slash here
    optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(morgan(process.env.NODE_ENV));
app.use(express.json({ limit: "200mb", extended: true }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));
app.use(errorHandler);
app.use(helmet());
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    })
);

// Database connection
connectDatabase();

passport.use(new DiscordStrategy({
    clientID: process.env.ClientID,
    clientSecret: process.env.ClientSecret,
    callbackURL: 'http://localhost:5000/auth/discord/callback',
    scope: ['identify', 'email'],
  },async  (accessToken, refreshToken, profile, done) => {
    let user = await User.findOne({ discordId: profile.id });
  
    if (!user) {
      user = new User({
        discordId: profile.id,
        username: profile.username,
        email: profile.email,
        avatar: profile.avatar,
      });
  
      await user.save();
    }
    return done(null, profile);
  }));

passport.serializeUser((user, done) => {
  done(null, user.id); 
});

passport.deserializeUser((id, done) => {
  done(null, { id: id, name: 'User Name' });
});

// Session setup (using express-session)
app.use(require('express-session')({ secret: 'your-secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Authentication Routes
app.get('/auth/discord', passport.authenticate('discord'));

// Callback route for Discord OAuth
app.get('/auth/discord/callback', passport.authenticate('discord', { failureRedirect: '/' }), (req, res) => {
    res.redirect('http://localhost:3000/');  // Redirect to the main page after successful login
});

// Basic Route
app.get("/", (req, res) => {
    res.send("<h1>Backend Server is Running</h1>");
});

// Handle graceful shutdown
process.on("SIGINT", () => {
    console.log("Shutting down...");
    server.close(() => {
        console.log("Closed all connections");
        process.exit(0);
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}/`));

module.exports = app;