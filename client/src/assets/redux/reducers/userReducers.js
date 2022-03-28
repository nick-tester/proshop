import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
} from "../constants/userConstants";

const userLoginInitialState = {
    loading: false,
    user: {},
    error: null
}

const userLoginReducer = (state = userLoginInitialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOGIN_REQUEST:
            return { ...state, loading: true }

        case USER_LOGIN_SUCCESS:
            return { ...state, loading: false, user: payload }

        case USER_LOGIN_FAIL:
            return { ...state, loading: false, error: payload }

        default:
            return state;
    }
};


export { userLoginReducer };