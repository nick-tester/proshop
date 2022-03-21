import { Outlet } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

import CartItems from "./CartItemsColumn";
import CartTotals from "./CartTotalsColumn";

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <>
            <Row>
                <Col md={8}>
                    <CartItems cartItems={cartItems} />
                </Col>
                <Col md={4}>
                    <CartTotals cartItems={cartItems} />
                </Col>
            </Row>

            <Outlet />
        </>
    )
};

export default CartPage;