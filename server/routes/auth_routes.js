import express from "express";

import { login, register } from "../controllers/auth_controllers.js";

const Router = express.Router();

Router.post("/login", login);

Router.post("/register", register);

export default Router;