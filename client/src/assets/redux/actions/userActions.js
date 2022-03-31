import axios from "axios";
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
} from "../constants/userConstants";

const baseURL = "http://localhost:5000";

const loginUser = (formData) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        const { data } = await axios.post(`${baseURL}/api/auth/login`, formData, config);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
        console.log(err.message);
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        });
    };
};

export { loginUser };