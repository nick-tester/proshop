import axios from "axios";

import { CART_ADD_ITEM, CART_REM_ITEM } from "../constants/cartConstants";

const baseURL = "http://localhost:5000";

const cartAddItem = (id, qty) => async (dispatch, getState) => {

    const { data } = await axios.get(`${baseURL}/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

const cartRemoveItem = id => (dispatch, getState) => {

    dispatch({
        type: CART_REM_ITEM,
        payload: id
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export {
    cartAddItem,
    cartRemoveItem
}