import express from "express";
import { userProfile, updateUserProfile } from "../controllers/user_controllers.js";
import protect from "../assets/middlewares/protect.js";

const router = express.Router();

router.route("/profile")
    .get(protect, userProfile)
    .put(protect, updateUserProfile);

export default router;