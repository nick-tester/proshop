import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from "../constants/productConstants";

const productListInitialState = {
    loading: false,
    products: [],
    error: null
}

const productListReducers = (state = productListInitialState, action) => {
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

const productDetailsInitialState = {
    loading: false,
    product: {},
    reviews: [],
    error: null
};

const productDetailsReducer = (state = productDetailsInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true }

        case PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, product: payload }

        case PRODUCT_DETAILS_FAIL:
            return { ...state, loading: false, error: payload }

        default:
            return state;
    };
}

export { productListReducers, productDetailsReducer };