import {
    ref,
    uploadBytesResumable,
    deleteObject,
    getDownloadURL,
} from "firebase/storage";
import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import { storage, db } from "../../firebase.config";
import {
    doc,
    getDoc,
    query,
    where,
    collection,
    getDocs,
} from "firebase/firestore";
import {
    sendEmailVerification,
    getAuth,
    onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const { profileInfo, image, setImage, deleteUser, user } =
        useContext(Context);
    const auth = getAuth();
    const [userId, setuserId] = useState("");
    const [userProfile, setUserProfile] = useState();
    const [profile, setProfile] = useState({
        imageurl: "",
        uid: "",
    });
    const navigate = useNavigate();

    const handlerDeleteUser = async (e) => {
        try {
            await deleteUser();
            navigate("/");
            toast.success("Successfully deleted user");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handler = (e) => {
        const { name, value } = e.target;
        setProfile((pre) => {
            return {
                ...pre,
                ["uid"]: auth.currentUser?.uid,
                [name]: value,
            };
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await profileInfo(profile);
            toast.success("Profile updated successfully");
            setProfile({
                name: "",
                imageurl: "",
                uid: "",
            });
        } catch (error) {
            toast.error("An error occurred while updating profile");
        }
    };

    const uploudImage = (e) => {
        const imageref = e.target.files[0];
        const storgeref = ref(storage, `images/${Date.now()}-${imageref.name}`);
        const uploadimage = uploadBytesResumable(storgeref, imageref);
        uploadimage.on(
            "state_changed",
            (onSnapshot) => {
                const progress =
                    (onSnapshot.bytesTransferred / onSnapshot.totalBytes) * 100;
                console.log(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadimage.snapshot.ref).then((downloadURL) => {
                    setImage(downloadURL);
                    setProfile((pre) => {
                        return {
                            ...pre,
                            imageurl: downloadURL,
                        };
                    });
                });
            }
        );
    };

    const removeImage = () => {
        console.log(profile.imageurl);
        const deleteRef = ref(storage, image);
        deleteObject(deleteRef)
            .then(() => {
                alert("deleted");
                setImage("");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container">
            <from className="settings" onSubmit={submitHandler}>
                <h1 className="settings-header">Basics</h1>
                <div className="settings-row">
                    <div>
                        <p>Photo</p>
                    </div>
                    <div className="settings-right">
                        {image ? (
                            <img
                                src={image}
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
                            for="imageurl"
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
                                onChange={uploudImage}
                                style={{
                                    display: "none",
                                }}
                            />
                            Edit
                        </label>

                        {image ? (
                            <button
                                className="deleteButton"
                                type="reset"
                                onClick={removeImage}>
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
                        <p> {auth.currentUser?.email} </p>
                    </div>
                </div>
                <div className="settings-row">
                    <p>Name</p>
                    <div className="settings-right">
                        <p> {user.name} </p>
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
                    <h4
                        style={{ cursor: "pointer" }}
                        onClick={handlerDeleteUser}>
                        Delete account
                    </h4>
                </div>
            </from>
        </div>
    );
};

export default Settings;
