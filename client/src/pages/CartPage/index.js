import { Outlet } from "react-router-dom";

const CartPage = () => {
    return (
        <>
            <h3>cart page</h3>
            <hr />

            <Outlet />
        </>
    )
};

export default CartPage;