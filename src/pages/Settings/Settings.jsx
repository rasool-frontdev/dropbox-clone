import {
    ref,
    uploadBytesResumable,
    deleteObject,
    getDownloadURL,
} from "firebase/storage";
import React, { useContext, useState } from "react";
import { Context } from "../../context/context";

const Settings = () => {
    const { userInfo } = useContext(Context);

    const submitHandler = async (e) => {
        e.preventDefault();
    };

    // const removeImage = () => {
    //     const deleteRef = ref(storage, image);
    //     deleteObject(deleteRef)
    //         .then(() => {
    //             alert("deleted");
    //             setImage("");
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    return (
        <div className="container">
            <div className="settings">
                <h1 className="settings-header">Basics</h1>
                <div className="settings-row">
                    <div>
                        <p>Photo</p>
                    </div>
                    <div className="settings-right">
                        {userInfo.photoURL ? (
                            <img
                                src={"http://placehold.it/"}
                                alt="img"
                                style={{
                                    borderRadius: "50%",
                                    width: "3rem",
                                    height: "3rem",
                                }}
                            />
                        ) : (
                            ""
                        )}
                        <label
                            htmlFor="imageurl"
                            style={{
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                            }}>
                            <input
                                type="file"
                                id="imageurl"
                                name="imageurl"
                                accept="image/*"
                                // onChange={uploudImage}
                                style={{
                                    display: "none",
                                }}
                            />
                            Edit
                        </label>

                        {false ? (
                            <button
                                className="deleteButton"
                                type="button"
                                // onClick={removeImage}
                            >
                                Delete
                            </button>
                        ) : (
                            ""
                        )}
                    </div>
                </div>

                <div className="settings-row">
                    <p>Email</p>
                    <div className="settings-right">
                        <p> {userInfo.email} </p>
                    </div>
                </div>
                <div className="settings-row">
                    <p>Name</p>
                    <div className="settings-right">
                        <p> {userInfo.displayName} </p>
                    </div>
                </div>
                <h4 className="settings-header">Delete account</h4>
                <div className="settings-row">
                    <div className="settings-row__left">
                        <p>Delete my Dropbox</p>
                        <b>
                            If you delete your account, your data will be gone
                            forever
                        </b>
                    </div>
                    <h4 style={{ cursor: "pointer" }}>Delete account</h4>
                </div>
            </div>
        </div>
    );
};

export default Settings;
