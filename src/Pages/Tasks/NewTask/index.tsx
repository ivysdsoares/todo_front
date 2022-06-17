import React, { Fragment } from "react";
import FormEl from "Components/Form";
import { useAppDispatch } from "Store";
import Actions from "Store/system";
import { Field, Form } from "react-final-form";
import { yup, ValidateForm } from "Functions/Yup";
import { AnyObject } from "yup/lib/types";
import { Listbox } from "@headlessui/react";

const validationSchema = yup.object().shape({
    name: yup.string().min(5).max(30).required(),
    email: yup.string().email().min(5).max(40).required(),
    password: yup.string().min(5).max(16).required(),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Senhas devem ser iguais")
        .required()
});

function NewTaskForm() {
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
                    <div className="flex justify-center flex-1 items-center">
                        <div className="flex flex-col relative shadow-elevation items-stretch justify-start p-8 bg-form rounded-xl min-w-[300px]">
                            <FormEl.Title text="New Task" />
                            <FormEl.Subtitle
                                text={"Decide what's your next goal"}
                            />
                            <input type="datetime-local" />
                            <div className="flex flex-col items-stretch  py-4 pb-3">
                                <Field name="name">
                                    {({ input, meta }) => (
                                        <FormEl.Text
                                            value={input.value}
                                            onChange={input.onChange}
                                            error={
                                                meta.submitFailed && meta.error
                                            }
                                            label="Title"
                                        />
                                    )}
                                </Field>
                                <div className="h-3" />
                                <Field name="email">
                                    {({ input, meta }) => (
                                        <FormEl.TextArea
                                            value={input.value}
                                            onChange={input.onChange}
                                            error={
                                                meta.submitFailed && meta.error
                                            }
                                            label="Description"
                                        />
                                    )}
                                </Field>
                                <div className="h-3" />
                                <Field name="email">
                                    {({ input, meta }) => (
                                        <FormEl.Date
                                            value={input.value}
                                            onChange={input.onChange}
                                            error={
                                                meta.submitFailed && meta.error
                                            }
                                            label="End Date"
                                        />
                                    )}
                                </Field>
                                <div className="h-3" />
                                <Field name="password">
                                    {({ input, meta }) => (
                                        <FormEl.Text
                                            password
                                            value={input.value}
                                            onChange={input.onChange}
                                            error={
                                                meta.submitFailed && meta.error
                                            }
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
                                            error={
                                                meta.submitFailed && meta.error
                                            }
                                            label="Repeat Password"
                                        />
                                    )}
                                </Field>
                                <div className="h-5" />
                                <Listbox
                                    as="div"
                                    className="group relative flex items-stretch flex-col"
                                    value="1"
                                    onChange={(e) => {}}
                                >
                                    <Listbox.Button
                                        className=" h-12 p-1
                                                    duration-200 border-b-2 
                                                    rounded-md  
                                                    bg-neutral group border-border 
                                                    group-focus-within:border-primary"
                                    >
                                        1wsad
                                    </Listbox.Button>
                                    <Listbox.Options className="bg-menu p-4 absolute top-12 w-full shadow-elevation">
                                        {[
                                            { label: "red", value: 1 },
                                            { label: "green", value: 2 }
                                        ].map((person) => (
                                            <Listbox.Option
                                                as={Fragment}
                                                key={person.value}
                                                value={person.value}
                                            >
                                                {({ active, selected }) => (
                                                    <li
                                                        className={`flex items-center py-2 last-child:border-0 border-b border-border ${
                                                            active
                                                                ? "bg-neutral"
                                                                : ""
                                                        }`}
                                                    >
                                                        <div
                                                            className={`bg-${person.label} w-3 h-3 mr-2 rounded-full`}
                                                        />
                                                        {person.label}
                                                    </li>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Listbox>

                                <FormEl.Button
                                    type="submit"
                                    title="SIGN IN"
                                    onClick={() => {
                                        dispatch(Actions.toggleMode());
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Form>
    );
}
export default NewTaskForm;
