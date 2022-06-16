import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./Components/signUpForm";

export default function SignUp(): JSX.Element {
    return (
        <div className="  flex justify-center bg-background  items-center flex-1 ">
            <div className="flex flex-col items-center">
                <div className="flex flex-col relative shadow-elevation items-stretch justify-start p-8 bg-form rounded-xl min-w-[300px]">
                    <p className="text-2xl  font-bold text-left font-body text-title ">
                        Nice to meet you,
                    </p>
                    <p className="text-base font-semibold text-start max-w-[300px] font-body text-subtitle ">
                        We'd like to know a few things about you...
                    </p>

                    <LoginForm />
                </div>
                <div className="flex text-sm pt-4 justify-center">
                    <p>Have an account?{"\xa0"}</p>
                    <Link className="text-secondary font-semibold" to="/">
                        <u>Sign In</u>
                    </Link>
                </div>
            </div>
        </div>
    );
}
