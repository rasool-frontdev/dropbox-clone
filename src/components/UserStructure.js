import { database } from "../firebase.config";

const UserStructure = (email, name, uid) => {
    // return {
    //     createdAt: db.date,
    //     docs: [],
    //     email: email,
    //     image: null,
    //     lastLogin: db.date,
    //     name: name,
    //     uid: uid,
    //     updatedAt: db.date,
    // };
    const model = {
        createdAt: database.date,
        docs: [],
        email: email,
        image: null,
        lastLogin: database.date,
        name: name,
        uid: uid,
        updatedAt: database.date,
    };
    return model;
};

export default UserStructure;
