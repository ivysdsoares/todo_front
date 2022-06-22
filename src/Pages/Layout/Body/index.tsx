import React from "react";
import { Outlet } from "react-router-dom";

export default function Body(): JSX.Element {
  return (
    <div className="flex flex-col font-body items-stretch justify-start w-screen h-screen min-h-screen bg-background">
      <Outlet />
    </div>
  );
}
