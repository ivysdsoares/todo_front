/* eslint-disable react/button-has-type */
import React from "react";
import { IGradientButtonProps } from "../types";

function isLoading(
    loading: boolean,
    children: JSX.Element | JSX.Element[] | undefined,
    title: string | undefined
): JSX.Element | null | string {
    if (loading)
        return (
            <div className="w-5 h-5 border-b-2 border-background animate-spin rounded-full" />
        );
    if (title) return title;
    if (children) return <> {children} </>;
    return null;
}
export default function GradientButton({
    onClick,
    type,
    children,
    title,
    className,
    loading,
    disabled
}: IGradientButtonProps): JSX.Element {
    return (
        <button
            type={type}
            disabled={disabled || loading}
            className={`${className} bg-gradient-to-r from-primary to-secondary 
            flex justify-center items-center
            font-bold 
            outline-none 
            hover:brightness-105 
            hover:shadow-button
            focus-visible:brightness-105 
            focus-visible:shadow-button-focus
            active:brightness-90 
            active:shadow-button-active
            text-background duration-200 
            disabled:saturate-50
            rounded-full h-12 `}
            onClick={onClick}
        >
            {isLoading(loading, children, title)}
        </button>
    );
}

GradientButton.defaultProps = {
    onClick: () => {
        return null;
    },
    children: undefined,
    title: undefined,
    className: "",
    type: "button",
    loading: false,
    disabled:false,
};
