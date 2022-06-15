import React from "react";
import { IGradientButtonProps } from "../types";

export default function GradientButton({
    onClick,
    className
}: IGradientButtonProps): JSX.Element {
    return (
        <button
            type="button"
            className={`${className} bg-gradient-to-r from-primary to-secondary font-bold hover:brightness-105 outline-none focus:brightness-105 focus:shadow-md active:brightness-90 text-background duration-200 rounded-full h-12 hover:shadow-md`}
            onClick={onClick}
        >
          Teste
        </button>
    );
}
