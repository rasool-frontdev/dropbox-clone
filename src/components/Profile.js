import {
    ref,
    uploadBytesResumable,
    deleteObject,
    getDownloadURL,
} from "firebase/storage";
import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import { storage, db } from "../firebase.config";

const ProfilePhoto = () => {
    const { profileInfo, image, setImage } = useContext(Context);
    const { uploadBtn, setFileUpload, showModal, setShowModal } =
        useContext(Context);
    // const [image, setImage] = useState("");

    const [profile, setProfile] = useState({
        imageurl: "",
        uid: "",
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await profileInfo(profile);
            alert("Profile Update Successfully");
            setProfile({
                imageurl: "",
                uid: "",
            });
        } catch (error) {
            alert("someError");
            console.log(error);
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

    const removeimage = () => {
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
        <div>
            <h4
                style={{ cursor: "pointer" }}
                onClick={() => setShowModal(true)}>
                Edit
            </h4>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h2 className="text-3xl font-semibold">
                                        Upload photo
                                    </h2>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-4 flex-auto">
                                    <input
                                        onChange={(event) => {
                                            setFileUpload(
                                                event.target.files[0]
                                            );
                                        }}
                                        type="file"
                                        name="imageurl"
                                        id="file"
                                        accept="image/*"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                                        placeholder="Enter folder name"
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={uploadBtn}>
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default ProfilePhoto;
