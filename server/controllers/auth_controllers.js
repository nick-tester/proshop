import User from "../assets/models/User.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import generateToken from "../assets/utils/tokenGenerator.js";

// @desc    Authenticate user
// @route   POST /api/auth/login
// @access  Public
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const matchPassword = await bcrypt.compare(password, user.password);

    if (user && matchPassword) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        });
    } else {
        res.status(401)
        throw new Error("Invalid credentials!")
    }
});

// @desc    Register and auth user
// @route   POST /api/auth/register
// @access  Public
const register = (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
};

export { login, register }