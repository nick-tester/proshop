import express from "express";

import { getProductsCtrl } from "../controllers/product_controllers.js";

const Router = express.Router();

Router.get("/", getProductsCtrl);

export default Router;