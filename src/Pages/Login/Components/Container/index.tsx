import React from "react";

function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
    return (
        <div className="flex flex-col-reverse items-center justify-center flex-1 w-full h-full  p-0 py-8  max-w-screen max-h-screen min-w-[350px] sm:p-4 sm:py-4 sm:flex-row">
            {children}
        </div>
    );
}

export default Container;
