import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = process.env.MONGO_URI;

export default async function connectDB() {
    try {
        const conn = await mongoose.connect(db, {
            dbName: "proshop2"
        });

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan);
    } catch (err) {
        console.error(`Error: ${error.message}`);
        process.exit(1)
    }
};