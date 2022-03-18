import axios from "axios";

import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from "../constants/productConstants";

const baseURL = "http://localhost:5000";

const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });

        const { data } = await axios.get(`${baseURL}/api/products`);

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (err) {
        console.log(err.message);
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        });
    }
};

export { getProducts };