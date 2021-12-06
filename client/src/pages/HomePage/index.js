import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

import Loading from "../../components/Loading";
import Product from "./Product";
const url = "http://localhost:5000/api/products";

const HomePageMain = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(url);

            setProducts(data);
        } catch (err) {
            console.error(err.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <Loading />
    }

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