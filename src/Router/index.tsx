import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    Outlet
} from "react-router-dom";
import Pages from "Pages";

function RoutesWrapper(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Pages.Layout.Body />}>
                    <Route index element={<Pages.Login.SignIn />} />
                </Route>
            </Routes>
        </Router>
    );
}
export default RoutesWrapper;
