//Import React, React Hooks and react-router-dom
import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
//  Import Ayth
import { useAuth } from "../../../contexts/AuthContext";
//  Import Components
import NavbarComponent from "../../Navbar/Navbar";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handlerSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to log in!!!");
        }

        setLoading(false);
    }

    return (
        <>
            <NavbarComponent />
            <div className="login">
                <div className="login-form">
                    <form className="form" onSubmit={handlerSubmit}>
                        <div className="form-header">
                            <h1>Sign in</h1>
                            <Link to={"/signup"}>or create an account</Link>
                        </div>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <div className="form-body">
                            <p>Email</p>
                            <input
                                type="email"
                                name="email"
                                required="Please enter an email address"
                                ref={emailRef}
                            />
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                required="Please enter a password"
                                ref={passwordRef}
                            />
                            <button type="submit">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
