import React from "react";
import { Outlet } from "react-router-dom";

export default function Body(): JSX.Element {
    return (
      
            <div className="bg-background w-screen h-screen  min-h-screen flex flex-col justify-start items-stretch">
                <Outlet />
            </div>
        
    );
}
