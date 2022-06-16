import React from "react";
import { useAppDispatch } from "Store";
import { Link } from "react-router-dom";
import GoogleAuth from "./Components/googleAuth";
import LoginForm from "./Components/signInForm";

import Logo from "./Components/logo";

export default function SignIn(): JSX.Element {
    
    return (
        <div className="flex flex-col-reverse bg-background  items-center justify-center flex-1 w-full h-full sm:flex-row">
            <div className="flex flex-col items-stretch">
                <div className="flex flex-col relative shadow-elevation items-stretch justify-start p-8 bg-form rounded-xl min-w-[300px]">
                    <p className="text-2xl font-bold text-left font-body text-title ">
                        Welcome,
                    </p>
                    <p className="text-base font-semibold text-start font-body text-subtitle ">
                        Inform your credentials to continue,
                    </p>

                    <LoginForm />
                    <div className="flex items-center py-2">
                        <div className="h-[1px] bg-border flex-1" />
                        <p className="px-2 text-sm text-placeholder">or</p>
                        <div className="h-[1px] bg-border flex-1" />
                    </div>
                    <div className="h-2" />
                    <GoogleAuth />
                </div>
                <div className="flex justify-center pt-4 text-sm">
                    <p>No account?{"\xa0"}</p>
                    <Link
                        className="font-semibold text-secondary"
                        to="/sign-up"
                    >
                        <u>Sign Up</u>
                    </Link>
                </div>
            </div>
            <div className="hidden w-10 sm:flex" />
            <Logo />
        </div>
    );
}
