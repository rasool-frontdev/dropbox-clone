// Import React, React Hooks and React-router-dom
import React, { useRef, useState } from "react";
import { Toast } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

//  Import Auth
import { useAuth } from "../../../contexts/AuthContext";
import NavbarComponent from "../../Navbar/Navbar";

export default function Settings() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updatePassword, updateEmail, deleteUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const Cancel = () => {
        try {
            history.push("/");
        } catch {
            setError("Something went wrong");
        }
    };
    function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        const promises = [];
        setLoading(true);
        setError("");

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value));
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises)
            .then(() => {
                history.push("/");
            })
            .catch(() => {
                setError("Failed to update account");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            <NavbarComponent />
            <div className="container">
                <div className="settings">
                    <div className="settings-form">
                        <form className="form" onSubmit={handleSubmit}>
                            {error && <Toast variant="danger">{error}</Toast>}
                            <h1 className="settings-header">Basics</h1>
                            <div className="form-body">
                                <p>Email</p>
                                <input
                                    id="email"
                                    type="email"
                                    ref={emailRef}
                                    defaultValue={currentUser.email}
                                    required="Please enter an email address"
                                />
                                <p>Password</p>
                                <input
                                    id="password"
                                    type="password"
                                    ref={passwordRef}
                                    required="Please enter a password"
                                />
                                <p>Confirm Password</p>
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    ref={passwordConfirmRef}
                                    required="Please enter a password again"
                                />
                                <button type="submit" disabled={loading}>
                                    Update
                                </button>
                                <div
                                    className="settings-cancel"
                                    onClick={Cancel}>
                                    Cancel
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <h4 className="settings-header">Delete account</h4>
                    <div className="settings-row">
                        <div className="settings-row__left">
                            <p>Delete my Dropbox</p>
                            <b>
                                If you delete your account, your data will be
                                gone forever
                            </b>
                        </div>
                        <button
                            className="settings-delete"
                            style={{ cursor: "pointer" }}
                            onClick={deleteAccount}>
                            Delete account
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    );
}
