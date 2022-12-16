import { Suspense } from "react";
import "./app.scss";
import Layout from "./layout/Layout";

function App() {
    return (
        <Suspense fallback={"Loading..."}>
            <div className="App">
                <Layout />
            </div>
        </Suspense>
    );
}

export default App;
