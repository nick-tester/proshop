import express from "express";

import { getProducts, getProductByID } from "../controllers/product_controllers.js";

const Router = express.Router();

Router.get("/", getProducts);

Router.get("/:product_id", getProductByID);

export default Router;