import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { registerUser } from "../../assets/redux/actions/userActions";
import FormContainer from "../../components/FormContainer";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.register);
    const navigateTo = useNavigate();
    const location = useLocation();
    const redirect = location ? location.search.split("=")[1] : "";

    const submitHandler = e => {
        e.preventDefault();
        if (!name || !email || !password || !password2) {
            console.log("All fields must filled!");
        } else {
            if (password !== password2) {
                console.log("Password do not match!");
            } else {
                dispatch(registerUser({ name, email, password }))
            }
        }
    };

    useEffect(() => {
        if (userInfo && userInfo.token) {
            navigateTo("/test");
        }
    }, [userInfo, navigateTo]);

    return (
        <FormContainer>
            <h2>register</h2>
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
                <Button type="submit" variant="primary" className="mt-3">register</Button>
            </Form>
            <Row>
                <Col>
                    Already registered? <Link to={redirect ? `/auth/login?redirect=${redirect}` : "/auth/login"}>login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
};

export default RegisterPage;