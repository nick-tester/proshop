import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <>
            <h3>cart page</h3>

            {cartItems.length > 0 ? (
                <ul style={{ listStyle: "none" }}>
                    {cartItems.map(item => {
                        return <li key={item.product}>{item.name} | {item.qty}</li>
                    })}
                </ul>
            ) : <h3>your cart is empty</h3>}

            <Outlet />
        </>
    )
};

export default CartPage;