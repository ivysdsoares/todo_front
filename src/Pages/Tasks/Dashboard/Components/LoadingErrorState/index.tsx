/* eslint-disable react/jsx-no-useless-fragment */
import { StatusOfflineIcon } from "@heroicons/react/outline";
import React, { ReactNode, useEffect, useState } from "react";
import "./styles.css";

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
      <div className="flex items-center justify-center flex-1 ">
        <div className="flex items-center justify-center w-24 h-24 rounded-full animate-spin bg-gradient-to-r from-primary to-secondary border-b-secondary">
          <div className="w-20 h-20 rounded-full bg-form " />
        </div>
      </div>
    );
  if (lastState === "ERROR")
    return (
      <div className="flex items-center justify-center flex-1 ">
        <div className="flex items-center justify-center flex-1  p-4   ">
          <p className=" text-2xl font-semibold  rounded-full p-4 animate-wiggle bg-gradient-to-r from-primary to-secondary  text-center text-red_text">
            <StatusOfflineIcon className="w-16 h-16 text-form" />
          </p>
        </div>
      </div>
    );
  return <>{children}</>;
}
export default LoadingErrorState;
