//  Import React
import React from "react";

//  Import Link
import { Link } from "react-router-dom";

//  Import Bootstrap components
import { Button } from "react-bootstrap";

import { AiFillFolder } from "react-icons/ai";

export default function Folder({ folder }) {
    return (
        <Button
            to={{
                pathname: `/folder/${folder.id}`,
                state: { folder: folder },
            }}
            className="folder"
            as={Link}>
            <AiFillFolder color="#A1C9F7" size="32" />
            <p className="text">{folder.name}</p>
        </Button>
    );
}
