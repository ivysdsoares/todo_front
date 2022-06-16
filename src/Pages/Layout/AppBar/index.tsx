import { ChevronRightIcon } from "@heroicons/react/outline";
import { LogoutIcon, XIcon, MoonIcon } from "@heroicons/react/solid";
import React from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "Store";
import AuthActions from "Store/auth";
import SystemActions from "Store/system";

import "./styles.css";

export default function AppBar(): JSX.Element {
    const authState = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col items-stretch justify-start w-screen h-screen min-h-screen  overflow-auto min-w-screen ">
            <div className="sticky top-0 flex flex-col items-stretch justify-start shadow-md">
                <div className="flex items-center justify-start w-full h-12 px-2 py-1 bg-transparent shadow-inner">
                    <p className="flex-1 px-2 text-2xl font-title">
                        <b className=" gradient-text w-fit">GoalGetter</b>
                    </p>
                    <p className="pl-3 pr-2 text-lg  text-placeholder">
                        {authState.name}{" "}
                    </p>
                    <div className="flex p-1 duration-200 rounded-full bg-gradient-to-bl from-primary to-secondary hover:brightness-95">
                        <button
                            onClick={() => {
                                dispatch(SystemActions.toggleMode());
                            }}
                            type="button"
                            className={`
                            flex items-center justify-center
                            text-placeholder outline-none 
                            hover:text-secondary_hover  hover:brightness-110 hover:shadow-md 
                            active:brightness-100 active:text-secondary_active active:shadow-inner
                            focus-visible:text-secondary  
                            duration-200 
                            p-1
                            bg-background rounded-full`}
                        >
                            <MoonIcon className="w-6  opacity-90 drop-shadow-lg" />
                        </button>
                        <div className="w-2" />
                        <button
                            onClick={() => {
                                dispatch(AuthActions.removeAuth());
                            }}
                            type="button"
                            className={`
                            flex items-center justify-center
                            text-placeholder outline-none 
                            hover:text-primary_hover  hover:brightness-110 hover:shadow-md 
                            active:brightness-100 active:text-primary_active active:shadow-inner
                            focus-visible:text-primary  
                            duration-200 
                            p-1
                            bg-background rounded-full`}
                        >
                            <XIcon className="w-6  opacity-90 drop-shadow-lg" />
                        </button>
                    </div>
                </div>
                <div className="h-1 border-gradient bg-blue " />
            </div>
            <div className="flex flex-col items-stretch justify-start flex-1 p-4 o ">
                <Outlet />
            </div>
        </div>
    );
}
