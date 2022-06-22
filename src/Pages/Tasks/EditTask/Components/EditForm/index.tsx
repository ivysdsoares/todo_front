import React, { Fragment } from "react";
import FormEl from "Components/Form";
import { Field, Form } from "react-final-form";
import { yup, ValidateForm } from "Functions/Yup";
import { ISelectOptions } from "Components/Form/types";
import { ReplyIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { ITask } from "Store/Task/types";

const validationSchema = yup.object().shape({
  title: yup.string().min(5).max(30).required(),
  description: yup.string().max(150).nullable(),
  expiration_date: yup.date().min(new Date()).required(),
  color: yup.number().oneOf([1, 2, 3, 4], "Invalid color").required(),
  status: yup
    .string()
    .oneOf(["ONGOING", "FAILED", "COMPLETE", "EXPIRED"], "Invalid status type")
    .required()
});
const options_color: Array<ISelectOptions> = [
  { value: 1, label: "Yellow", mod: "yellow" },
  { value: 2, label: "Green", mod: "green" },
  { value: 3, label: "Neutral", mod: "background" },
  { value: 4, label: "Blue", mod: "blue" }
];
const options_status: Array<ISelectOptions> = [
  { value: "ONGOING", label: "Active", mod: "blue" },
  { value: "FAILED", label: "Failed", mod: "red" },
  { value: "COMPLETE", label: "Completed", mod: "green" },
  { value: "EXPIRED", label: "Expired", mod: "yellow" }
];

type IOnSubmit = (props: Omit<ITask, "id" & "user_id">) => void;

function EditForm({
  onSubmit,
  initialValues,
  loading
}: {
  onSubmit: IOnSubmit;
  initialValues: ITask | null;
  loading: boolean;
}) {
  return (
    <Form
      validate={ValidateForm(validationSchema)}
      initialValues={initialValues}
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
            <div className="h-3" />
            <Field name="status">
              {({ input, meta }) => (
                <FormEl.Select
                  label="Status"
                  options={options_status}
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
                title="SAVE CHANGES"
              />          
            </div>
          </div>
        </form>
      )}
    </Form>
  );
}
export default EditForm;
