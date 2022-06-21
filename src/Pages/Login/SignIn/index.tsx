import React from "react";
import { Link } from "react-router-dom";
import Form from "Components/Form";
import GoogleAuth from "./Components/GoogleAuth";

import Logo from "./Components/Logo";
import SignInForm from "./Components/SignInForm";
import Container from "../Components/Container";

export default function SignIn() {
    return (
        <Container>
            <div className="flex flex-col items-stretch">
                <Form.Paper>
                    <Form.Title text=" Welcome," />
                    <Form.Subtitle text="Inform your credentials to continue," />

                    <SignInForm />
                    <div className="flex items-center py-2">
                        <div className="h-[1px] bg-border flex-1" />
                        <p className="px-2 text-sm text-placeholder">or</p>
                        <div className="h-[1px] bg-border flex-1" />
                    </div>
                    <div className="h-2" />
                    <GoogleAuth />
                </Form.Paper>
                <div className="flex justify-center pt-4 text-sm">
                    <p className="font-body text-title">No account?{"\xa0"}</p>
                    <Link
                        className="font-semibold text-secondary hover:text-secondary_hover"
                        to="/sign-up"
                    >
                        <u>Sign Up</u>
                    </Link>
                </div>
            </div>
            <div className="hidden w-10 sm:flex" />
            <Logo />
        </Container>
    );
}
