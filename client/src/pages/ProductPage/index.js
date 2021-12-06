import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, ListGroupItem, Card, Button } from "react-bootstrap";

import Rating from "../../components/RatingStars";
const url = "http://localhost:5000/api/products";

const ProductPage = () => {
    const [product, setProduct] = useState({});

    const { id } = useParams();

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(url);
            setProduct(data.find(p => p._id === id));
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line
    }, []);

    function addToCart() {
        console.log("Add to cart");
    }

    return (
        <>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
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
        </>
    )
};

export default ProductPage;