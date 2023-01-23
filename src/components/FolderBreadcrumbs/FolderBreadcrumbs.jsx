//  Import React
import React from "react";

//  Import Bootsrap components
import { Breadcrumb } from "react-bootstrap";

//  Import Link
import { Link } from "react-router-dom";

//  Import FOLDER
import { ROOT_FOLDER } from "../../hooks/useFolder";

export default function FolderBreadcrumbs({ currentFolder }) {
    let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
    if (currentFolder) path = [...path, ...currentFolder.path];

    return (
        <div className="route">
            {path.map((folder, index) => (
                <Breadcrumb.Item
                    key={folder.id}
                    linkAs={Link}
                    linkProps={{
                        to: {
                            pathname: folder.id ? `/folder/${folder.id}` : "/",
                            state: {
                                folder: {
                                    ...folder,
                                    path: path.slice(1, index),
                                },
                            },
                        },
                    }}
                    style={{ maxWidth: "150px" }}>
                    {folder.name}
                </Breadcrumb.Item>
            ))}
            {currentFolder && (
                <Breadcrumb.Item
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "200px" }}
                    active>
                    {currentFolder.name}
                </Breadcrumb.Item>
            )}
        </div>
    );
}
