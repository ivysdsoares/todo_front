import React, { Fragment } from "react";
import FormEl from "Components/Form";
import { useAppDispatch } from "Store";
import Actions from "Store/System";
import { Field, Form } from "react-final-form";
import { yup, ValidateForm } from "Functions/Yup";
import { AnyObject } from "yup/lib/types";
import { ISelectOptions } from "Components/Form/types";
import { ReplyIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const validationSchema = yup.object().shape({
  title: yup.string().min(5).max(30).required(),
  description: yup.string().max(150).nullable(),
  expiration_date: yup.date().min(new Date()).required(),
  color: yup.number().oneOf([1, 2, 3], "Valor inválido").required()
});
const options: Array<ISelectOptions> = [
  { value: 1, label: "Neutral", mod: "background" },
  { value: 2, label: "Yellow", mod: "yellow" },
  { value: 3, label: "Green", mod: "green" },
  { value: 4, label: "Blue", mod: "blue" }
];

function EditTaskForm() {
  const dispatch = useAppDispatch();
  function onSubmit(e: AnyObject) {
    return e;
  }
  return (
    <div className="flex items-center justify-center flex-1">
      <Form
        validate={ValidateForm(validationSchema)}
        onSubmit={(e) => onSubmit(e)}
      >
        {(props) => (
          // eslint-disable-next-line react/prop-types
          <form onSubmit={props.handleSubmit}>
            <FormEl.Paper>
              <FormEl.Title text="New Task" />
              <FormEl.Subtitle text={"Decide what's your next goal"} />
              <div className="flex flex-col items-stretch py-4 pb-3">
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
                      options={options}
                      value={input.value}
                      error={meta.submitFailed && meta.error}
                      onChange={input.onChange}
                    />
                  )}
                </Field>
                <div className="h-5" />
                <div className="flex items-center">
                  <Link
                    to="/logged"
                    className="flex items-center justify-center w-12 h-12 p-2 rounded-full text-subtitle hover:bg-neutral"
                  >
                    <ReplyIcon className="w-6" />
                  </Link>
                  <div className="w-2" />
                  <FormEl.Button
                    className="flex-1"
                    type="submit"
                    title="CREATE"
                  />
                </div>
              </div>
            </FormEl.Paper>
          </form>
        )}
      </Form>
    </div>
  );
}
export default EditTaskForm;
