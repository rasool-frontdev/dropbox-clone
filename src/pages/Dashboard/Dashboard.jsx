import React, { useContext, useEffect, useState } from "react";
import CreateFolderModal from "../../components/CreateFolderModal";
import UploadFile from "../../components/UploadFile";
import { Context } from "../../context/context";

const Dashboard = () => {
    return (
        <div className="container">
            <div className="btns">
                <UploadFile />
                <CreateFolderModal />
            </div>
            <div className="contents">
       
            </div>
        </div>
    );
};

export default Dashboard;
