import React from "react";

const Settings = () => {
    return (
        <div className="container">
            <from className="settings">
                <h1 className="settings-header">Basics</h1>
                <div className="settings-row">
                    <p>Photo</p>
                    <div className="settings-right">
                        <span className="settings-right__photo">user</span>
                        <h4>Edit</h4>
                    </div>
                </div>
                <div className="settings-row">
                    <p>Name</p>
                    <div className="settings-right">
                        <span>user</span>
                        <h4>Edit</h4>
                    </div>
                </div>
                <div className="settings-row">
                    <p>Personal email</p>
                    <div className="settings-right">
                        <span>user</span>
                        <h4>Edit</h4>
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
                    <h4>Delete account</h4>
                </div>
            </from>
        </div>
    );
};

export default Settings;
