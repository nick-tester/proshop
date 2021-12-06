import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Product from "./Product";
const url = "http://localhost:5000/api/products";

const HomePageMain = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            setProducts(data);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Late Products</h1>
            <Row>
                {products.map(product => {
                    return (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default HomePageMain;