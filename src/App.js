import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "./app.scss";
import Layout from "./layout/Layout";

function App() {
    return (
        <Suspense fallback={"Loading..."}>
            <div className="App">
                <Layout />
                <ToastContainer position="top-center" />
            </div>
        </Suspense>
    );
}

export default App;
