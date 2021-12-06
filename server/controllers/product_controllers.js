import products from "../assets/products.js";

const getProductsCtrl = (req, res) => {
    const tempList = [...products];

    res.status(200).json(tempList);
}

export {
    getProductsCtrl
};