import React from "react";
import { Outlet } from "react-router-dom";

export default function Body(): JSX.Element {
    return (
        <div className="w-screen h-screen overflow-auto text-base bg-background font-body text-title">
            <Outlet />
        </div>
    );
}
