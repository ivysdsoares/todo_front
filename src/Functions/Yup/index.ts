/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import * as yup from "yup";
import { setIn } from "final-form";
import { AnyObject } from "yup/lib/types";

yup.setLocale({
    mixed: {
        default: "Not valid",
        required: "*Required"
    },
    string: {
        length: "Must have ${length} character",
        min: "Must have at least ${min} characters",
        max: "Must have less than ${max} characters",
        email: "Email must be valid"
    },
    number: {
        positive: "*Required",
        moreThan: "Must be bigger than ${min}",
        lessThan: "Must be smaller than ${min}",
        min: "Should be at least ${min} ",
        max: "Should be less than ${max} "
    },
    array: {
        min: "Min of ${min} items",
        max: "Max of ${max} items"
    },
    date:{
        min:"Date must be after ${min}",
        max:"Date must be after ${max}"
    }
});

const ValidateForm = (schema: AnyObject) => async (values: object) => {
    if (typeof schema === "function") {
        schema = schema();
    }
    try {
        await schema.validate(values, { abortEarly: false });
    } catch (err: any) {
        if (err && err.inner) {
            const errors = err.inner.reduce(
                (formError: any, innerError: any) => {
                    return setIn(
                        formError,
                        innerError.path,
                        innerError.message
                    );
                },
                {}
            );

            return errors;
        }
    }
};

export { ValidateForm, yup };
