import React, { useEffect, useState } from "react";
import { useAppDispatch } from "Store";
import Actions from "Store/system";
import { CalendarIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import {
    GoogleLogin,
    useGoogleLogin,
    hasGrantedAnyScopeGoogle
} from "@react-oauth/google";
import { BookmarkIcon } from "@heroicons/react/solid";
import "./styles.css";
import { GoogleLogin as ButtonGoogle } from "react-google-login";
import Form from "Components/Form";
import jwtDecode from "jwt-decode";

export default function SignIn(): JSX.Element {
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center w-full h-full">
            <div className="flex flex-col relative shadow-elevation items-stretch justify-start p-12 bg-form rounded-xl min-w-[300px]">
                <p className="text-2xl font-bold text-left font-body text-title ">
                    Welcome,
                </p>
                <p className="text-base font-semibold text-center font-body text-subtitle ">
                    Inform your credentials to continue,
                </p>
                <div className="h-8 " />
                <Form.Text label="Password" />
                <div className="h-4" />
                <Form.Text label="Password" />
                <div className="h-8" />
                <button
                    type="button"
                    className=" bg-gradient-to-r from-primary to-secondary font-bold hover:brightness-105 outline-none focus:brightness-105 focus:shadow-md active:brightness-90 text-background duration-200 rounded-full h-12 hover:shadow-input"
                    onClick={() => {
                        dispatch(Actions.toggleMode(null));
                    }}
                >
                    SIGN IN
                </button>
                <div className="h-2" />
                <div className="flex justify-center">
                    <GoogleLogin
                        shape="pill"
                        size="large"
                        logo_alignment="center"
                        width="200px"
                        onSuccess={(credentialResponse) => {
                            if (credentialResponse.credential)
                                console.log(
                                    jwtDecode(credentialResponse.credential)
                                );
                        }}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                    />
                </div>

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
