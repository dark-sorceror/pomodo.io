const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendResponse } = require("../utils/responseHandler");
const User = require("../models/user");

const register = async (req, res) => {
    try {
        const { name, password, email, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            sendResponse(res, 401);
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name: name,
            password: encryptedPassword,
            email,
        });

        sendResponse(res, 201);
    } catch (error) {
        sendResponse(res, 500, error);
    }
};

const login = async (req, res) => {
    try {
        let user = null;
        const { email, password } = req.body;

        // If User Enters Email
        if (email) {
            user = await User.findOne({ email: email });
        }

        if (!user || !(await bcrypt.compare(password, user.password))) {
            sendResponse(res, 404);
        } else {
            if (bcrypt.compareSync(password, user.password)) {
                // Generate JWT Token
                const userToken = jwt.sign(
                    {
                        id: user.id,
                        email: user.email,
                        role: user.role,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "30d",
                    }
                );

                // Send User Data
                sendResponse(res, 200, {
                    user,
                    token: userToken,
                });
            } else {
                sendResponse(res, 405);
            }
        }
    } catch (error) {
        sendResponse(res, 500, error);
    }
};

const discordAuth = async (req, res) => {
    const code = req.query.code;
    const clientId = "YOUR_CLIENT_ID";
    const clientSecret = "YOUR_CLIENT_SECRET";
    const redirectUri = "http://localhost:3000/auth/discord";
  
    try {
      const response = await fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: "authorization_code",
          code,
          redirect_uri: redirectUri,
        }),
      });
  
      const data = await response.json();
      res.json(data);
    } catch (err) {
      res.status(500).send("Error authenticating with Discord");
    }
  }



module.exports = {
    register,
    login,
    discordAuth
};