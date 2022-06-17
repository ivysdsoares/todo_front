import React from "react";
import FormEl from "Components/Form";
import { useAppDispatch } from "Store";
import Actions from "Store/system";
import { Form, Field } from "react-final-form";
import { yup, ValidateForm } from "Functions/Yup";
import { AnyObject } from "yup/lib/types";

const validationSchema = yup.object().shape({
    email: yup.string().email().min(5).max(40).required(),
    password: yup.string().min(5).max(16).required()
});

export default function SignInForm(): JSX.Element {
    const dispatch = useAppDispatch();
    function onSubmit(e: AnyObject) {
        return e;
    }
    return (
        <Form
            validate={ValidateForm(validationSchema)}
            onSubmit={(e) => onSubmit(e)}
        >
            {(props) => (
                // eslint-disable-next-line react/prop-types
                <form onSubmit={props.handleSubmit}>
                    <div className="flex flex-col items-stretch  py-4 pb-3">
                        <Field name="email">
                            {({ input, meta }) => (
                                <FormEl.Text
                                    value={input.value}
                                    onChange={input.onChange}
                                    error={meta.submitFailed && meta.error}
                                    label="Email"
                                />
                            )}
                        </Field>
                        <div className="h-3" />
                        <Field name="password">
                            {({ input, meta }) => (
                                <FormEl.Text
                                    value={input.value}
                                    onChange={input.onChange}
                                    error={meta.submitFailed && meta.error}
                                    label="Password"
                                />
                            )}
                        </Field>
                        <div className="h-5" />
                        <FormEl.GradientButton
                            loading
                            type="submit"
                            title="SIGN IN"
                            onClick={() => {
                                dispatch(Actions.toggleMode());
                            }}
                        />
                    </div>
                </form>
            )}
        </Form>
    );
}
