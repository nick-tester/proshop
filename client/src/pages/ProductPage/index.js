import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, ListGroupItem, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Rating from "../../components/RatingStars";
import Loading from "../../components/Loading";
import Message from "../../components/Message";
import { getProductDetails } from "../../assets/redux/actions/productActions";

const ProductPage = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);

    const { loading, product, error } = productDetails;

    useEffect(() => {
        if (id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, id]);

    function addToCart() {
        console.log("Add to cart");
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