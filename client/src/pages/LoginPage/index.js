import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../assets/redux/actions/userActions";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();

        if ((!email || !password) || (!email && !password)) {
            console.log("All fields must be field!");
        } else {
            dispatch(loginUser({ email, password }));
        }
    };

    return (
        <>
            <h2>login</h2>

            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="email">email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">login</button>
            </form>
        </>
    )
};

export default LoginPage;