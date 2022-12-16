import React from "react";
import { SiDropbox } from "react-icons/si";
import { NavLink, Route, Routes } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className="register">
                <div className="register-form">
                    <div className="form-header">
                        <h3 className="form-header__title">
                            Create an account
                        </h3>
                        <span> or sing in </span>
                    </div>
                    <div className="form-header__inputs">
                        <span>First name</span>
                        <input type="text" />
                        <span>Last name</span>
                        <input type="text" />
                        <span>Email</span>
                        <input type="email" />
                        <span>Password</span>
                        <input type="password" />
                        <button type="button">Create an account </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
