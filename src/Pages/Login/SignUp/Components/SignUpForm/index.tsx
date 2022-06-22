import React from "react";
import FormEl from "Components/Form";
import { useAppDispatch, useAppSelector } from "Store";
import Actions from "Store/Auth";
import { Field, Form } from "react-final-form";
import { yup, ValidateForm } from "Functions/Yup";
import { AnyObject } from "yup/lib/types";

const validationSchema = yup.object().shape({
  name: yup.string().min(5).max(30).required(),
  email: yup.string().email().min(5).max(40).required(),
  password: yup.string().min(5).max(16).required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas devem ser iguais")
    .required()
});

export default function SignUpForm() {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);
  function onSubmit(e: AnyObject) {
    dispatch(
      Actions.signUp({ name: e.name, email: e.email, password: e.password })
    );
  }
  return (
    <Form
      validate={ValidateForm(validationSchema)}
      onSubmit={(e) => onSubmit(e)}
    >
      {(props) => (
        // eslint-disable-next-line react/prop-types
        <form onSubmit={props.handleSubmit}>
          <div className="flex flex-col items-stretch py-4 pb-3">
            <Field name="name">
              {({ input, meta }) => (
                <FormEl.Text
                  value={input.value}
                  onChange={input.onChange}
                  error={meta.submitFailed && meta.error}
                  label="Name"
                />
              )}
            </Field>
            <div className="h-3" />
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
            <div className="flex h-[1px] bg-border " />
            <div className="h-3" />
            <Field name="password">
              {({ input, meta }) => (
                <FormEl.Text
                  password
                  value={input.value}
                  onChange={input.onChange}
                  error={meta.submitFailed && meta.error}
                  label="Password"
                />
              )}
            </Field>
            <div className="h-3" />
            <Field name="confirm_password">
              {({ input, meta }) => (
                <FormEl.Text
                  password
                  value={input.value}
                  onChange={input.onChange}
                  error={meta.submitFailed && meta.error}
                  label="Repeat Password"
                />
              )}
            </Field>
            <div className="h-5" />
            <FormEl.Button
              type="submit"
              loading={authState.loading}
              title="SIGN IN"
            />
            <FormEl.Error error={authState.error} />
          </div>
        </form>
      )}
    </Form>
  );
}
