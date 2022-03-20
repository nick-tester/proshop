import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cartAddItem } from "../../assets/redux/actions/cartActions";

const CartQuery = () => {
    const query = useLocation();
    const { id } = useParams();

    const qty = query ? +query.search.split("=")[1] : null;

    const dispatch = useDispatch();

    useEffect(() => {
        if (id && qty) {
            dispatch(cartAddItem(id, qty));
        }
    }, [dispatch, id, qty]);

    return <></>
};

export default CartQuery;