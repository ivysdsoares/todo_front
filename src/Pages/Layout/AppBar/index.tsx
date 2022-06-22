import React from "react";
import { XIcon, MoonIcon } from "@heroicons/react/solid";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "Store";
import AuthActions from "Store/Auth";
import SystemActions from "Store/System";
import "./styles.css";

function AppBar(): JSX.Element {
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-stretch overflow-visible justify-start w-screen  min-h-screen min-w-screen max-h-screen h-screen ">
      <div className="flex flex-col items-stretch justify-start shadow-md bg-form">
        <div className="flex items-center justify-start w-full h-12 px-2 py-1 bg-transparent shadow-inner">
          <p className="flex-1 px-2 text-2xl font-title">
            <b className=" gradient-text w-fit">GoalGetter</b>
          </p>
          <p className="pl-3 pr-2 text-lg text-placeholder">{authState.name}</p>
          <div className="flex p-1 duration-200 rounded-full bg-gradient-to-bl from-primary to-secondary hover:brightness-95">
            <button
              onClick={() => {
                dispatch(SystemActions.toggleMode());
              }}
              type="button"
              className="flex items-center justify-center p-1 duration-200 rounded-full outline-none text-placeholder hover:text-secondary_hover hover:brightness-110 hover:shadow-md active:brightness-100 active:text-secondary_active active:shadow-inner focus-visible:text-secondary bg-background"
            >
              <MoonIcon className="w-6 opacity-90 drop-shadow-lg" />
            </button>
            <div className="w-2" />
            <button
              onClick={() => {
                dispatch(AuthActions.removeAuth());
              }}
              type="button"
              className="flex items-center justify-center p-1 duration-200 rounded-full outline-none text-placeholder hover:text-primary_hover hover:brightness-110 hover:shadow-md active:brightness-100 active:text-primary_active active:shadow-inner focus-visible:text-primary bg-background"
            >
              <XIcon className="w-6 opacity-90 drop-shadow-lg" />
            </button>
          </div>
        </div>
        <div className="h-1 border-gradient bg-blue " />
      </div>
      <div
        style={{
          maxHeight: "calc(100vh - 52px )",
          height: "calc(100vh - 52px )"
        }}
        className="  flex flex-col items-stretch justify-start flex-1 p-4 px-2 overflow-auto sm:px-8 "
      >
        <Outlet />
      </div>
    </div>
  );
}
export default AppBar;
