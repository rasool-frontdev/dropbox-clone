import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser } = useContext(Context);
    const handlerSubmit = async (e) => {
        e.preventDefault();
        const data = {
            firstName,
            email,
            password,
        };

        await createUser(data);
    };

    return (
        <div className="register">
            <div className="register-form">
                <form className="form" onSubmit={handlerSubmit}>
                    <div className="form-header">
                        <h1>Create an account</h1>
                        <Link to={"/login"}>or sign in</Link>
                    </div>
                    <div className="form-body">
                        <p>First name</p>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={firstName.firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <p>Last name</p>
                        <input id="lastName" name="lastName" type="text" />
                        <p>Email</p>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required="Please enter an email address"
                        />
                        <p>Password</p>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required="Please enter a password"
                        />
                        <button type="submit">Create an account</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
