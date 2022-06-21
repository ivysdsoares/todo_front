import React from "react";
import { IPaperProps } from "../types";

function Paper({ children }: IPaperProps) {
    return (
        <div className="flex flex-col relative shadow-elevation items-stretch justify-start p-8 bg-form rounded-xl w-[350px]  min-w-[300px]">
            {children}
        </div>
    );
}
export default Paper;
