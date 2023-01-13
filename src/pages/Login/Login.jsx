import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../context/context";
import { auth } from "../../firebase.config";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loginUser } = useContext(Context);

    const handlerSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        };

        await loginUser(data);
    };

    return (
        <div className="login">
            <div className="login-form">
                <form className="form" onSubmit={handlerSubmit}>
                    <div className="form-header">
                        <h1>Sign in</h1>
                        <Link to={"/register"}>or create an account</Link>
                    </div>
                    <div className="form-body">
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            required="Please enter an email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            required="Please enter a password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
