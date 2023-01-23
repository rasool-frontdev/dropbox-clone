// Import React, React Hooks and react-router-dom
import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

//  Import Bootstrap Components
import { Alert } from "react-bootstrap";

//  Import Auth
import { useAuth } from "../../../contexts/AuthContext";
import NavbarComponent from "../../Navbar/Navbar";

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handlerSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to create an account");
        }

        setLoading(false);
    }

    return (
        <>
            <NavbarComponent />
            <div className="register">
                <div className="register-form">
                    <form className="form" onSubmit={handlerSubmit}>
                        <div className="form-header">
                            <h1>Create an account</h1>
                            <Link to={"/login"}>or sign in</Link>
                        </div>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <div className="form-body">
                            <p>First name</p>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                            />
                            <p>Last name</p>
                            <input id="lastName" name="lastName" type="text" />
                            <p>Email</p>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                ref={emailRef}
                                required="Please enter an email address"
                            />
                            <p>Password</p>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                ref={passwordRef}
                                required="Please enter a password"
                            />
                            <p>Confirm Password</p>
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                required="Please enter a password again"
                                ref={passwordConfirmRef}
                            />
                            <button type="submit" disabled={loading}>
                                Create an account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
