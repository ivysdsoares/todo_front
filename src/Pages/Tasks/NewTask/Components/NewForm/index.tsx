import React, { Fragment } from "react";
import FormEl from "Components/Form";
import { Field, Form } from "react-final-form";
import { yup, ValidateForm } from "Functions/Yup";
import { ISelectOptions } from "Components/Form/types";
import { ReplyIcon } from "@heroicons/react/outline";

import { ITask } from "Store/Task/types";

const validationSchema = yup.object().shape({
  title: yup.string().min(5).max(30).required(),
  description: yup.string().max(150).nullable(),
  expiration_date: yup.date().min(new Date()).required(),
  color: yup.number().oneOf([1, 2, 3, 4], "Invalid color").required()
});
const options_color: Array<ISelectOptions> = [
  { value: 1, label: "Yellow", mod: "yellow" },
  { value: 2, label: "Green", mod: "green" },
  { value: 3, label: "Neutral", mod: "background" },
  { value: 4, label: "Blue", mod: "blue" }
];

type IOnSubmit = (props: Omit<ITask, "id" | "user_id">) => void;

function NewForm({
  onSubmit,
  loading
}: {
  onSubmit: IOnSubmit;
  loading: boolean;
}) {
  return (
    <Form
      validate={ValidateForm(validationSchema)}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSubmit={(e: any) => onSubmit(e)}
    >
      {(props) => (
        // eslint-disable-next-line react/prop-types
        <form onSubmit={props.handleSubmit}>
          <div className="flex flex-col items-stretch pt-4 ">
            <Field name="title">
              {({ input, meta }) => (
                <FormEl.Text
                  value={input.value}
                  onChange={input.onChange}
                  error={meta.submitFailed && meta.error}
                  label="Title"
                />
              )}
            </Field>
            <div className="h-3" />
            <Field name="description">
              {({ input, meta }) => (
                <FormEl.TextArea
                  value={input.value}
                  onChange={input.onChange}
                  error={meta.submitFailed && meta.error}
                  label="Description"
                />
              )}
            </Field>
            <div className="h-3" />
            <Field name="expiration_date">
              {({ input, meta }) => (
                <FormEl.Date
                  value={input.value}
                  onChange={input.onChange}
                  error={meta.submitFailed && meta.error}
                  label="Expiration Date"
                />
              )}
            </Field>

            <div className="h-3" />

            <Field name="color">
              {({ input, meta }) => (
                <FormEl.Select
                  label="Color"
                  options={options_color}
                  value={input.value}
                  error={meta.submitFailed && meta.error}
                  onChange={input.onChange}
                />
              )}
            </Field>
            <div className="h-5" />
            <div className="flex items-center">
              <FormEl.Button
                loading={loading}
                className="flex-1"
                type="submit"
                title="CREATE"
              />
            </div>
          </div>
        </form>
      )}
    </Form>
  );
}
export default NewForm;
