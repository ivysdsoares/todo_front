import Form from "Components/Form";
import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./Components/SignUpForm";

export default function SignUp() {
    return (
        <div className="flex items-center justify-center flex-1 p-0  bg-background sm:p-4">
            <div className="flex flex-col items-center">
                <div className="flex flex-col relative shadow-elevation items-stretch justify-start p-8 bg-form rounded-xl w-[350px]  min-w-[300px]">
                    <Form.Title text="Nice to meet you," />
                    <Form.Subtitle text="We'd like to know a few things about you..." />

                    <SignUpForm />
                </div>
                <div className="flex justify-center pt-4 text-sm">
                    <p>{`Have an account?\xa0`}</p>
                    <Link
                        className="font-semibold text-secondary hover:text-secondary_hover"
                        to="/"
                    >
                        <u>Sign In</u>
                    </Link>
                </div>
            </div>
        </div>
    );
}
