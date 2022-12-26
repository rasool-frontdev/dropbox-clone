import React, { useContext, useEffect, useState } from "react";
import CreateFolderModal from "../../components/CreateFolderModal";
import UploadFile from "../../components/UploadFile";
import { Context } from "../../context/context";

const Dashboard = () => {
    const { fileList } = useContext(Context);
    return (
        <div className="container">
            <div className="btns">
                <UploadFile />
                <CreateFolderModal />
            </div>
            <div className="contents">
                {/* <div> */}
                {fileList.map((url) => {
                    return <img src={url} alt="img" />;
                })}
                {/* </div> */}
            </div>
        </div>
    );
};

export default Dashboard;
