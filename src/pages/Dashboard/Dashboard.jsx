import React, { useContext } from "react";
import { Context } from "../../context/context";

const Dashboard = () => {
    const { user } = useContext(Context);

    return <div>Dashboard</div>;
};

export default Dashboard;
