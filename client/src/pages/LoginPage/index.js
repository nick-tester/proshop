import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { loginUser } from "../../assets/redux/actions/userActions";
import FormContainer from "../../components/FormContainer";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const location = useLocation();
    const redirect = location ? location.search.split("=")[1] : "";
    const { userInfo } = useSelector(state => state.login);

    const submitHandler = e => {
        e.preventDefault();

        if (!email || !password) {
            console.log("All fields must be field!");
        } else {
            dispatch(loginUser({ email, password }));
        }
    };

    useEffect(() => {
        if (userInfo && redirect) {
            navigateTo(redirect);
        }
        if (userInfo) {
            navigateTo("/");
        }
    }, [userInfo, navigateTo, redirect]);

    return (
        <FormContainer>
            <h2>login</h2>

            <Form onSubmit={submitHandler} className="mb-3">
                <Form.Group controlId="email">
                    <Form.Label>email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>password: </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button type="submit" variant="primary">login</Button>
            </Form>
            <Row>
                <Col>
                    New customer? <Link to={redirect ? `/auth/register?redirect=${redirect}` : "/auth/register"}>register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
};

export default LoginPage;