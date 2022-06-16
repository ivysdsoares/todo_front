import React from "react";
import { Outlet } from "react-router-dom";

export default function Body(): JSX.Element {
    return (
        <div className="flex flex-col items-stretch w-screen h-screen overflow-auto max-w-screen min-w-screen">
            <div className="min-w-full h-fit  min-h-[500px] flex flex-col overflow-visible justify-start items-stretch  text-base bg-background grow font-body text-title">
                <Outlet />
            </div>
        </div>
    );
}
