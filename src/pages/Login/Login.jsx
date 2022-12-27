import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../context/context";

const Login = () => {
    const { signInUser } = useContext(Context);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const userHandler = (e) => {
        const { name, value } = e.target;
        setUser((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handlerSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInUser(user.email, user.password);
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
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            required="Please enter an email address"
                            onChange={userHandler}
                        />
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            required="Please enter a password"
                            onChange={userHandler}
                        />
                        <button type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
