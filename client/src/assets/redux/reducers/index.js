import { combineReducers } from "redux";

import { productListReducers, productDetailsReducer } from "./productReducers";

const reducers = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducer
});

export default reducers;