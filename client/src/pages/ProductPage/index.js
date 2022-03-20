import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Row, Col, Image, ListGroup, ListGroupItem, Card, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Rating from "../../components/RatingStars";
import Loading from "../../components/Loading";
import Message from "../../components/Message";
import { getProductDetails } from "../../assets/redux/actions/productActions";

const ProductPage = () => {
    const [qty, setQty] = useState(1);

    const { id } = useParams();
    const navTo = useNavigate();
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);

    const { loading, product, error } = productDetails;

    useEffect(() => {
        if (id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, id]);

    function addToCart() {
        navTo(`/cart/${id}?qty=${qty}`);
    }

    return (
        <>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            {loading ? <Loading /> : error ? <Message variant="danger">{error}</Message> : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <h2>{product.name}</h2>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </ListGroupItem>
                            <ListGroupItem>
                                Price: £{product.price}
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup>
                                <ListGroupItem>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col><strong>£{product.price}</strong></Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</Col>
                                    </Row>
                                </ListGroupItem>

                                {product.countInStock > 0 && (
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Qty:</Col>
                                            <Col>
                                                <Form.Control
                                                    as="select"
                                                    value={qty}
                                                    onChange={e => setQty(e.target.value)}>
                                                    {[...Array(+product.countInStock).keys()].map(x => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                )}

                                <ListGroupItem>
                                    <Button
                                        className="btn-block"
                                        type="button"
                                        disabled={product.countInStock === 0}
                                        onClick={addToCart}
                                    >
                                        Add To Cart
                                    </Button>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
};

export default ProductPage;