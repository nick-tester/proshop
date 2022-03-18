import { combineReducers } from "redux";

import { productListReducers } from "./productReducers";

const reducers = combineReducers({
    productList: productListReducers
});

export default reducers;