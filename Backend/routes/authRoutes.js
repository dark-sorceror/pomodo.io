const express = require("express");
const { register, login } = require("../controllers/authController");
const { body, validationResult } = require("express-validator");
const { sendResponse } = require("../utils/responseHandler");

const router = express.Router();

router.post(
    "/register",
    [
        body("email").isEmail().withMessage("Enter a valid email"),
        body("password")
            .isLength({ min: 8 })
            .withMessage("Password should be at least 8 characters"),
        body("name").not().isEmpty().withMessage("Name is required"),
    ],
    (req, res, next) => {
        const errors = validationResult(req);

        if ((!errors, isEmpty())) {
            return sendResponse(res, 400, errors.array());
        }

        next();
    },
    register
);

router.post("/login", login);

module.exports = router;