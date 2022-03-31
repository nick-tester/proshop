import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

const cartItemsFromLocalStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const userInfoFromLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
    cart: {
        loading: false,
        cartItems: cartItemsFromLocalStorage,
        error: null
    },
    login: {
        loading: false,
        userInfo: userInfoFromLocalStorage,
        error: null
    }
};

const middlewares = [thunk];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;