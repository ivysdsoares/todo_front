import React from "react";
import { useAppDispatch } from "Store";
import Actions from "Store/system";
import { CalendarIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import { BookmarkIcon } from "@heroicons/react/solid";
import "./styles.css";

export default function SignIn(): JSX.Element {
    const dispatch = useAppDispatch();
    return (
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center w-full h-full">
            <div className="flex flex-col relative shadow-elevation items-stretch justify-start px-4 pt-8 pb-10 bg-form rounded-xl min-w-[300px]">
                <p className="text-2xl font-bold text-center font-body text-title ">
                    Welcome,
                </p>
                <div className="h-8" />
                <div className="focus-within:">
                    <label className="px-4 text-sm text-description font-semibold">
                        User
                    </label>
                    <input className="h-10 text-title bg-neutral w-full p-2 px-4 rounded-md  duration-200  focus:shadow-input outline-none  " />
                </div>
                <div className="h-2" />
                <div className="focus-within:">
                    <label className="px-4 text-sm text-description font-semibold">
                        Password
                    </label>
                    <input className="h-10 text-title bg-neutral w-full p-2 px-4 rounded-md  duration-200  focus:shadow-input outline-none  " />
                    <p className="text-xs px-4 pt-1 text-red_text">*Senha Incorreta</p>
                  </div>
                <div className="h-8" />
                <button
                    type="button"
                    className=" bg-gradient-to-r from-primary to-secondary font-bold hover:brightness-105 outline-none focus:brightness-105 focus:shadow-md active:brightness-90 text-background duration-200 rounded-full h-12 hover:shadow-md"
                    onClick={() => {
                        dispatch(Actions.toggleMode(null));
                    }}
                >
                    SIGN IN
                </button>

                <div className="h-2" />
                <p className=" font-semibold text-center hover:text-primary duration-200 text-placeholder">
                    <u>Create an account</u>
                </p>
            </div>
            <div className="w-10 hidden sm:flex" />
            <div className=" flex flex-col items-stretch justify-start p-4 ">
                <p className="text-4xl font-bold text-center font-title gradient-text">
                    Goal Getter
                </p>
                <div className=" hidden sm:flex flex-col items-center justify-center py-2 ">
                    <p className="text-lg font-semibold text-subtitle">
                        <b>Set</b> your goals.
                    </p>

                    <p className="text-lg font-semibold text-subtitle">
                        And get them <b>Done</b>.
                    </p>
                </div>
                <div className=" hidden sm:flex gradient-svg ">
                    <CalendarIcon className="h-40 text-background" />
                </div>
            </div>
        </div>
    );
}
