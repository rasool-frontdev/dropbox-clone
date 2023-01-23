//  Import React
import React from "react";

import { FaFile } from "react-icons/fa";
export default function File({ file }) {
    return (
        <a
            href={file.url}
            className="uploaded-files"
            rel="noreferrer"
            target="_blank">
            <FaFile className="file-icon" />
            <p className="text">{file.name}</p>
        </a>
    );
}
