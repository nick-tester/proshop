import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from "../constants/productConstants";

const productListReducers = (state = { loading: false, products: [], error: null }, action) => {
    const { type, payload } = action;

    switch (type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true }

        case PRODUCT_LIST_SUCCESS:
            return { ...state, loading: false, products: payload }

        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: payload }

        default:
            return state;
    };
};


export { productListReducers };