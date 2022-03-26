import express from "express";
import dotenv from "dotenv";
import "colors";

import { connectDB, setHeaders, notFound, errorHandler } from "./assets/index.js";
import { authRoutes, productRoutes, userRoutes } from "./routes/index.js";

dotenv.config();
connectDB();

const server = express();

server.use(express.json({ extended: true }));
server.use(setHeaders);

server.use("/api/products", productRoutes);
server.use("/api/auth", authRoutes);
server.use("/api/user", userRoutes);

server.use(notFound);

server.use(errorHandler);

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.blue));