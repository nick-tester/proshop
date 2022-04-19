import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { getUserDetails } from "../../assets/redux/actions/userActions";
import Loading from "../../components/Loading";
import Message from "../../components/Message";

const ProfilePage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.login);
    const userDetails = useSelector(state => state.userDetails);
    const { loading, user, error } = userDetails;

    const navigateTo = useNavigate();

    const submitHandler = e => {
        e.preventDefault();

        let formData = { name, email };

        if (password) {
            if (password !== password2) {
                alert("Password does not match!");
                return;
            } else {
                formData.password = password;
            }
        };

        console.log(formData);
    };

    useEffect(() => {
        if (!userInfo) {
            navigateTo("/auth/login");
        } else {
            if (!user.name) {
                dispatch(getUserDetails("profile"));
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [dispatch, userInfo, navigateTo, user]);

    return (
        <Row>
            <Col md={3}>
                <h2>user profile</h2>
                {loading && <Loading />}
                {error && <Message variant="danger">{error.message}</Message>}
                <Form onSubmit={submitHandler} className="mb-3">
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Set Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    {password.length >= 6 && (
                        <Form.Group controlId="password2">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                value={password2}
                                onChange={e => setPassword2(e.target.value)} />
                        </Form.Group>
                    )}
                    <Button type="submit" variant="primary" className="mt-3">update</Button>
                </Form>
            </Col>
            <Col md={9}>
                <h4>order details here...</h4>
            </Col>
        </Row>
    )
};


export default ProfilePage;