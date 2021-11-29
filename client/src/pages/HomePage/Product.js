import { Card } from "react-bootstrap";
import RatingStars from "../../components/RatingStars";

const Product = ({ product }) => {
    const { _id, image, name, rating, numReviews, price } = product;

    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${_id}`}>
                <Card.Img src={image} variant="top" />
            </a>

            <Card.Body>
                <a href={`/product/${_id}`}>
                    <Card.Title as="div">
                        <strong>{name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div className="my-3">
                        <RatingStars value={rating} text={`${numReviews} reviews`} color="green" />
                    </div>
                </Card.Text>
                <Card.Text as="h3" className="product-price">
                    £{price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Product;