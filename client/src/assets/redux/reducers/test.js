const testReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case "LOADING":
            return { loading: true }

        case "RESULT":
            return { loading: false, data: payload }

        case "FAIL":
            return { loading: false, error: payload }

        default:
            return state;
    };
};


export default testReducer;