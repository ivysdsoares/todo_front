/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import * as yup from "yup";
import { setIn } from "final-form";
import { AnyObject } from "yup/lib/types";

yup.setLocale({
    mixed: {
        default: "Não é válido",
        required: "*Obrigatório"
    },
    string: {
        length: "Deve possuir ${length} caracteres",
        min: "Deve ser maior que ${min} caracteres",
        max: "Deve ser menor que ${max} caracteres",
        email: "Email deve ser válido"
    },
    number: {
        positive: "*Obrigatório",
        moreThan: "Deve ser maior que ${min}",
        lessThan: "Deve ser maior que ${min}",
        min: "Deve ser maior que ${min} ",
        max: "Deve ser menor que ${max} "
    },
    array: {
        min: "Minimo de ${min} itens",
        max: "Máximo ${max} itens"
    },
    date:{
        min:"A data deve ser após ${min}",
        max:"A data deve ser antes de ${max}"
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
