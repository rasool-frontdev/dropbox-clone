//  Import React and react Hooks
import React, { useState } from "react";

//  Import Bookstrap Components
import { Button, Modal, Form } from "react-bootstrap";

//  Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

// Import DB
import { database } from "../../firebase";

//  Import Auth
import { useAuth } from "../../contexts/AuthContext";

//  Import FOLDER
import { ROOT_FOLDER } from "../../hooks/useFolder";

//  Import modul css

import { FiFolderPlus } from "react-icons/fi";
import { BsChevronCompactLeft } from "react-icons/bs";
import { AiFillFolder, AiOutlinePlus } from "react-icons/ai";

// import "bootstrap/dist/css/bootstrap.min.css"

export default function AddFolderButton({ currentFolder }) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const { currentUser } = useAuth();

    function openModal() {
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (currentFolder == null) return;

        const path = [...currentFolder.path];
        if (currentFolder !== ROOT_FOLDER) {
            path.push({ name: currentFolder.name, id: currentFolder.id });
        }

        database.folders.add({
            name: name,
            parentId: currentFolder.id,
            userId: currentUser.uid,
            path: path,
            createdAt: database.getCurrentTimestamp(),
        });
        setName("");
        closeModal();
    }

    return (
        <>
            <button className="btn" type="button" onClick={openModal}>
                <AiOutlinePlus size="24" />
                Create Folder
                <BsChevronCompactLeft size="16"/>
            </button>
            <Modal className="modal" show={open} onHide={closeModal}>
                <Form className="modal__block" onSubmit={handleSubmit}>
                    <div className="block">
                        <div className="block-header">
                            <AiFillFolder color="#A1C9F7" size="42" />
                            <p className="block-header__title">Create folder</p>
                        </div>
                        <Modal.Body>
                            <p className="block-title">Name</p>
                            <Form.Group>
                                <Form.Control
                                    className="input"
                                    type="text"
                                    value={name}
                                    placeholder="Folder name"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </Modal.Body>
                        <div className="modal-btns">
                            <Button className="close" onClick={closeModal}>
                                Close
                            </Button>
                            <Button className="add" type="submit">
                                Add Folder
                            </Button>
                        </div>
                    </div>
                </Form>
            </Modal>
        </>
    );
}
