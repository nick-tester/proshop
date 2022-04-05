import { combineReducers } from "redux";

import { productListReducers, productDetailsReducer } from "./productReducers";
import cartReducer from "./cartReducers";
import { userLoginReducer, userRegisterReducer, userDetailsReducer } from "./userReducers";

const reducers = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    login: userLoginReducer,
    register: userRegisterReducer,
    userDetails: userDetailsReducer
});

export default reducers;