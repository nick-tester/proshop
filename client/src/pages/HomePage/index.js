import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { getProducts } from "../../assets/redux/actions/productActions";
import Loading from "../../components/Loading";
import Product from "./Product";

const HomePageMain = () => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);

    const { loading, products, error } = productList;

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

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