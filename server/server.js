import express from "express";
import dotenv from "dotenv";

import setHeaders from "./assets/set_headers.js";
import connectDB from "./assets/db.js";
import productRoutes from "./routes/product_routes.js";
import authRoutes from "./routes/auth_routes.js";

dotenv.config();
connectDB();

const server = express();

server.use(express.json({ extended: true }));
server.use(setHeaders);

server.use("/api/products", productRoutes);
server.use("/api/auth", authRoutes);

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;
server.listen(5000, () => console.log(`Server running in ${NODE_ENV} on port ${PORT}`));