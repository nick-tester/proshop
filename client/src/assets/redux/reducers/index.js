import { combineReducers } from "redux";

import { productListReducers, productDetailsReducer } from "./productReducers";
import cartReducer from "./cartReducers";

const reducers = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducer,
    cart: cartReducer
});

export default reducers;