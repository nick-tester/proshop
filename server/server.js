import express from "express";
import dotenv from "dotenv";

import productRoutes from "./routes/product_routes.js";
import setHeaders from "./assets/set_headers.js";

dotenv.config();

const server = express();

server.use(express.json({ extended: true }));
server.use(setHeaders);

server.use("/api/products", productRoutes);

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;
server.listen(5000, () => console.log(`Server running in ${NODE_ENV} on port ${PORT}`));