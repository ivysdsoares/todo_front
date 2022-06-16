import React from "react";
import { IButtonProps } from "../types";

export default function Button({
    onClick,
    children,
    title,
    color,
    className
}: IButtonProps): JSX.Element {
    return (
        <button
            type="button"
            className={`${className} outline-none   font-bold 
            bg-${color}
            hover:bg-${color}_hover 
            hover:shadow-button
            focus-visible:bg-${color}_hover 
            focus-visible:shadow-button-focus
            active:bg-${color}_active 
            active:shadow-button-active
            text-title
            duration-200 rounded-md 
            h-12 `}
            onClick={onClick}
        >
            {title || children}
        </button>
    );
}

Button.defaultProps = {
    onClick: () => {
        return null;
    },
    children: undefined,
    title: undefined,
    className: "",
    color: "primary"
};
