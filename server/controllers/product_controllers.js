import asyncHandler from "express-async-handler";

import Product from "../assets/models/Product.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();

    res.status(200).json(products);
});

// @desc    Fetch product by ID
// @route   GET /api/products/:product_id
// @access  public
const getProductByID = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findById(req.params.product_id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (err) {
        if (err.kind === "ObjectId") {
            return res.status(404).json({ message: "Product not found" })
        }

        console.error(err.message);
    }
});

export {
    getProducts,
    getProductByID
};