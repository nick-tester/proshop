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
const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        res.status(400)
        throw new Error("This email already exist!")
    }

    user = new User({ name, email, password });

    user.password = await bcrypt.hash(password, await bcrypt.genSalt(10));

    const savedUser = await user.save();

    const newUser = {
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        isAdmin: savedUser.isAdmin,
        token: generateToken(savedUser._id)
    };

    res.status(201).json(newUser);
});

export { login, register }