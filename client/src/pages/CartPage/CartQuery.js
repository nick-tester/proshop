import { useLocation } from "react-router-dom";

const CartQuery = () => {
    const query = useLocation();

    const qty = query ? +query.search.split("=")[1] : null;

    return <>{qty}</>
};

export default CartQuery;