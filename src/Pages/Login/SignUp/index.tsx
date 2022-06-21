import Form from "Components/Form";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import SignUpForm from "./Components/SignUpForm";

export default function SignUp() {
    return (
        <Container>
            <div className="flex flex-col items-center">
                <Form.Paper>
                    <Form.Title text="Nice to meet you," />
                    <Form.Subtitle text="We'd like to know a few things about you..." />

                    <SignUpForm />
                </Form.Paper>
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
        </Container>
    );
}
