import asyncHandler from "express-async-handler";
import User from "../assets/models/User.js";

// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private
const userProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");

    res.status(200).json(user);
});

export { userProfile };