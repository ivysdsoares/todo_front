/* eslint-disable react/jsx-no-useless-fragment */

import { ExclamationIcon } from "@heroicons/react/outline";
import React, { ReactNode, useEffect, useState } from "react";

function parseState(loading: boolean, error: boolean | string): string {
  if (loading) {
    return "LOADING";
  }
  if (typeof error === "string") {
    return "ERROR";
  }
  return "OTHER";
}

function LoadingErrorState({
  loading,
  error,
  children
}: {
  loading: boolean;
  error: string | false;
  children: ReactNode;
}) {
  const [lastState, setLast] = useState(parseState(loading, error));
  useEffect(() => {
    const wait = setTimeout(() => {
      setLast(parseState(loading, error));
    }, 1000);
  }, [loading, error]);
  if (lastState === "LOADING")
    return (
      <div className="flex items-center justify-center flex-1  py-12">
        <div className="flex items-center justify-center w-24 h-24 rounded-full animate-spin bg-gradient-to-r from-primary to-secondary border-b-secondary">
          <div className="w-20 h-20 rounded-full bg-form " />
        </div>
      </div>
    );
  if (lastState === "ERROR")
    return (
      <div
        style={{ backgroundClip: "text" }}
        className="flex items-center    rounded-md justify-center flex-1 py-12  "
      >
        <ExclamationIcon className="w-14  text-red_text" />
        <div className="flex-1 flex flex-col items-start pl-4">
          <p className="  text-lg font-bold  text-title">
            Oops! An error ocurred
          </p>
          <p className=" text-base  font-semibold  text-subtitle  text-center  ">
            {error}
          </p>
        </div>
      </div>
    );
  return <>{children}</>;
}
export default LoadingErrorState;
