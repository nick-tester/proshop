import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import User from "../assets/models/User.js";
import generateToken from "../assets/utils/tokenGenerator.js";

// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private
const userProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");

    res.status(200).json(user);
});

// @desc    Update user profile
// @route   PUT /api/user/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            const hashedPassword = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));
            user.password = hashedPassword || user.password;
        };

        const updatedUserProfile = await user.save();

        res.status(200).json({
            name: updatedUserProfile.name,
            email: updatedUserProfile.email,
            isAdmin: updatedUserProfile.isAdmin,
            token: generateToken(updatedUserProfile._id)
        });
    } else {
        res.status(404)
        throw new Error("User not found!")
    }
});

export { userProfile, updateUserProfile };