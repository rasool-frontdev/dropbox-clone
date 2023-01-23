// Import React
import React from "react";

// Import React Router Dom => 5.2.0
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import Sigup
import Signup from "./components/authentication/Signup/Signup";

//Import AuthProvider
import { AuthProvider } from "./contexts/AuthContext";
import "./app.scss";

// Import Components
import Login from "./components/authentication/Login/Login.jsx";
import PrivateRoute from "./components/authentication/PrivateRoute/PrivateRoute";
import UpdateProfile from "./components/authentication/Settings/Settings";
import Dashboard from "./components/Dashboard/Dashboard";
import Mobile from "./components/Mobile/Mobile";
import Desktop from "./components/Desktop/Desktop";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    {/* Drive */}
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <PrivateRoute
                        exact
                        path="/folder/:folderId"
                        component={Dashboard}
                    />

                    {/* Profile */}
                    <PrivateRoute path="/settings" component={UpdateProfile} />

                    {/* Auth */}
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/mobile" component={Mobile} />
                    <Route path="/desktop" component={Desktop} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;
