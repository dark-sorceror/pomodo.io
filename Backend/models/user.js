const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    discordId: {
        type: String,
        // required: true,
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User",
    },
    dateJoined: {
        type: Date,
        default: Date.now,
    },
    xP: {
        type: String,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;