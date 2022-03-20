import { CART_ADD_ITEM, CART_REM_ITEM } from "../constants/cartConstants";

const cartInitialState = {
    cartItems: []
};

const cartReducer = (state = cartInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ADD_ITEM:
            const item = payload;
            const itemExist = state.cartItems.find(x => x.product === item.product);

            if (itemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === itemExist.product ? item : x)
                }
            } else {
                return { ...state, cartItems: [...state.cartItems, payload] }
            }

        // case CART_REM_ITEM:
        //     return {}

        default:
            return state;
    };
};

export default cartReducer;