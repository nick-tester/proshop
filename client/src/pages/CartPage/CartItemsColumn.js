import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Row, Col, ListGroup, ListGroupItem, Image, Form, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

import Message from "../../components/Message";
import { cartAddItem } from "../../assets/redux/actions/cartActions";

const CartItemsColumn = ({ cartItems }) => {
    const dispatch = useDispatch();

    const cartRemoveItem = id => {
        console.log(id);
    };

    return (
        <>
            <h1>shopping cart</h1>
            {cartItems.length === 0 ? <Message>Your cart is empty!</Message> : (
                <ListGroup variant="flush">
                    {cartItems.map(item => {
                        const { product, image, name, price, qty, countInStock } = item;
                        return (
                            <ListGroupItem key={product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={image} alt={name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${product}`}>{name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        £{price}
                                    </Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            value={qty}
                                            onChange={e => dispatch(cartAddItem(product, +e.target.value))}>
                                            {[...Array(+countInStock).keys()].map(x => (
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() => cartRemoveItem(product)}
                                        ><FaTrash color="red" /></Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
            )}
        </>
    )
};

export default CartItemsColumn;