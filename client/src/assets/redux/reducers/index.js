import { combineReducers } from "redux";

import { productListReducers, productDetailsReducer } from "./productReducers";
import cartReducer from "./cartReducers";
import { userLoginReducer } from "./userReducers";

const reducers = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    login: userLoginReducer
});

export default reducers;