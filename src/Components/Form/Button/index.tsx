/* eslint-disable react/button-has-type */
import React from "react";
import { IButtonProps } from "../types";

function isLoading(
  loading: boolean,
  children: JSX.Element | JSX.Element[] | undefined,
  title: string | undefined
): JSX.Element | null | string {
  if (loading) return (
    <div className="w-5 h-5 border-b-2 border-background animate-spin rounded-full" />
  );
  if (title) return title;
  if (children) return <> {children} </>;
  return null;
}
export default function Button({
  onClick,
  children,
  title,
  color,
  className,
  type,
  loading,
  disabled
}: IButtonProps): JSX.Element {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${className} 
            flex justify-center items-center
            outline-none   font-bold 
            bg-${color}
            hover:bg-${color}_hover 
            hover:shadow-button
            focus-visible:bg-${color}_hover 
            focus-visible:shadow-button-focus
            active:bg-${color}_active 
            active:shadow-button-active
            text-title
            disabled:bg-${color}_disabled
            duration-500 rounded-md 
            h-12 `}
      onClick={onClick}
    >
      {isLoading(loading, children, title)}
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
  color: "primary",
  type: "button",
  loading: false,
  disabled: false
};
