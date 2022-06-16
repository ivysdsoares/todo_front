import React from "react";
import Form from "Components/Form";
import { useAppDispatch } from "Store";
import Actions from "Store/system";

export default function LoginForm(): JSX.Element {
    const dispatch = useAppDispatch();
    return (
        <div className="flex flex-col items-stretch py-4 pb-3">
            <Form.Text label="Name" />
            <div className="h-4" />
            <Form.Text label="Email" />
            <div className="h-4" />
            <Form.Text label="Picture" />
            <div className="h-4" />
            <div className="flex h-[1px] bg-border " />
            <div className="h-4" />
            <Form.Text label="Password" />
            <div className="h-4" />
            <Form.Text label="Confirm Password" />
            <div className="h-5" />
            <Form.Button
                title="SIGN IN"
                onClick={() => {
                    dispatch(Actions.toggleMode());
                }}
            />
        </div>
    );
}
