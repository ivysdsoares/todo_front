import React from "react";
import { Outlet } from "react-router-dom";

export default function AppBar(): JSX.Element {
    return (
        <div className="bg-background w-screen h-screen overflow-auto">
            <Outlet />
        </div>
    );
}
