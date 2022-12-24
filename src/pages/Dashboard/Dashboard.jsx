import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.config";
import { v4 } from "uuid";
import { RiUploadLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";

const Dashboard = () => {
    const [fileUpload, setFileUpload] = useState(null);
    const [fileList, setFileList] = useState([]);

    const fileListRef = ref(storage, "files/");

    const uploadFile = () => {
        if (fileUpload == null) return;

        const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
        uploadBytes(fileRef, fileUpload).then((snaphsot) => {
            getDownloadURL(snaphsot.ref).then((url) => {
                setFileList((prev) => [...prev, url]);
            });
            toast.success("File uploaded successfully");
        });
    };

    useEffect(() => {
        listAll(fileListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setFileList((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    const createFile = () => {
        console.log("create file");
    };

    return (
        <div className="container">
            <div className="btns">
                <input
                    className="upload-file"
                    id="uploadFile"
                    type="file"
                    onChange={(event) => {
                        setFileUpload(event.target.files[0]);
                    }}
                />
                <button className="btn" onClick={uploadFile}>
                    Upload Files
                </button>
                {/* <label htmlFor="uploadFile">
                        <RiUploadLine size="16" cursor={"pointer"} />
                    </label> */}

                <button className="btn">
                    <label htmlFor="uploadFile">
                        <AiOutlinePlus size="16" cursor={"pointer"} />
                    </label>
                    Create Folder
                    <BiChevronDown />
                </button>
            </div>
            {fileList.map((url) => {
                return <img width={"120px"} src={url} alt="img" />;
            })}
        </div>
    );
};

export default Dashboard;
