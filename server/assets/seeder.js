import "mongoose";
import dotenv from "dotenv";

import users from "../assets/data/users.js";
import products from "../assets/data/products.js";
import User from "../assets/models/User.js";
import Product from "../assets/models/Product.js";
import Order from "../assets/models/Order.js";

import connectDB from "../assets/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        //add admin user to products START

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        });

        //add admin user to products END

        await Product.insertMany(sampleProducts);

        console.log("Data imported!");

        process.exit()

    } catch (err) {
        console.error(err.message);
        process.exit(1)
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data destroyed!");

        process.exit()

    } catch (err) {
        console.error(err.message);
        process.exit(1)
    }
};

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
};