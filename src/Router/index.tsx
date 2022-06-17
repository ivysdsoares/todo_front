import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    Outlet,
    useLocation
} from "react-router-dom";
import Pages from "Pages";
import { useAppSelector } from "Store";

import Permissions from "./Permissions";

function RoutesWrapper(): JSX.Element {
    const authState = useAppSelector((state) => state.auth);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Pages.Layout.Body />}>
                    <Route
                        index
                        element={
                            <Permissions.NoAuthOnly email={authState.email}>
                                <Pages.Login.SignIn />
                            </Permissions.NoAuthOnly>
                        }
                    />
                    <Route
                        path="/sign-up"
                        element={
                            <Permissions.NoAuthOnly email={authState.email}>
                                <>
                                    {console.log("rerenderizer")}

                                    <Pages.Login.SignUp />
                                </>
                            </Permissions.NoAuthOnly>
                        }
                    />
                    <Route
                        path="/logged"
                        element={
                            <Permissions.AuthOnly email={authState.email}>
                                <Pages.Layout.AppBar />
                            </Permissions.AuthOnly>
                        }
                    >
                        <Route index element={<Pages.Tasks.Dashboard />} />
                        <Route path='new-task' element={<Pages.Tasks.NewTask />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}
export default RoutesWrapper;
