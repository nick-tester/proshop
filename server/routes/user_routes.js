import express from "express";
import { userProfile } from "../controllers/user_controllers.js";
import protect from "../assets/middlewares/protect.js";

const router = express.Router();

router.get("/profile", protect, userProfile);

export default router;