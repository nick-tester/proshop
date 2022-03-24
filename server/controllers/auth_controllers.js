import User from "../assets/models/User.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

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
            token: null
        });
    } else {
        res.status(401)
        throw new Error("Invalid credentials!")
    }
});

const register = (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
};

export { login, register }