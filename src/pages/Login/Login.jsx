import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../context/context";

const Login = () => {
    const { signInUser } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handlerSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInUser(email, password);
            toast.success("Successfully signed in!");
            navigate("/dashboard");
        } catch (error) {
            toast.error(`Stop ${error.message}`);
        }
    };

    return (
        <div className="login">
            <div className="login-form">
                <form className="form" onSubmit={handlerSubmit}>
                    <div className="form-header">
                        <h1>Create an account</h1>
                        <Link to={"/register"}>or create an account</Link>
                    </div>
                    <div className="form-body">
                        {/* <p>First name</p>
                        <input type="text" required />
                        <p>Last name</p>
                        <input type="text" /> */}
                        <p>Email</p>
                        <input
                            type="email"
                            required="Please enter an email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>Password</p>
                        <input
                            type="password"
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
