import React from "react";
import { IGradientButtonProps } from "../types";

export default function GradientButton({
    onClick,
    children,
    title,
    className
}: IGradientButtonProps): JSX.Element {
    return (
        <button
            type="button"
            className={`${className} bg-gradient-to-r from-primary to-secondary 
            font-bold 
            outline-none 
            hover:brightness-105 
            hover:shadow-button
            focus-visible:brightness-105 
            focus-visible:shadow-button-focus
            active:brightness-90 
            active:shadow-button-active
            text-background duration-200 
            rounded-full h-12 `}
            onClick={onClick}
        >
            {title || children}
        </button>
    );
}

GradientButton.defaultProps = {
    onClick: () => {
        return null;
    },
    children: undefined,
    title: undefined,
    className: ""
};
