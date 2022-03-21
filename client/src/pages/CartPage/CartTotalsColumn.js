import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const RightColumn = ({ cartItems }) => {

    return (
        <Card>
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h2>subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                    £{cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default RightColumn;