import React from "react";
import Form from "Components/Form";
import { useAppDispatch } from "Store";
import Actions from "Store/system";


export default function LoginForm(): JSX.Element {
    const dispatch = useAppDispatch();
    return (
        <div className="flex flex-col items-stretch py-4 pb-3">
            <Form.Text label="User" />
            <div className="h-4" />
            <Form.Text label="Password" />
            <div className="h-5" />
            <Form.GradientButton
                title="SIGN IN"
                onClick={() => {
                    dispatch(Actions.toggleMode());
                }}
            />
        </div>
    );
}
