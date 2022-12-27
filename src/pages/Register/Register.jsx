import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
    const { createUser } = useContext(Context);
    const navigate = useNavigate();

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

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
            await createUser(user.email, user.password);
            toast.success("Successfully registered!");
            navigate("/dashboard");
        } catch (error) {
            toast.error(`Stop ${error.message}`);
        }
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
                            required
                        />
                        <p>Last name</p>
                        <input type="text" />
                        <p>Email</p>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={user.email}
                            required="Please enter an email address"
                            onChange={userHandler}
                        />
                        <p>Password</p>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={user.password}
                            required="Please enter a password"
                            onChange={userHandler}
                        />
                        <button type="submit">Create an account</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
