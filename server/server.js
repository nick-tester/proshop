import express from "express";
import dotenv from "dotenv";

dotenv.config();

const server = express();


const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;
server.listen(5000, () => console.log(`Server running in ${NODE_ENV} on port ${PORT}`));