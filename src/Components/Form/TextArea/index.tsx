import React, { useEffect, useRef, useState } from "react";
import idGen from "Functions/idGen";
import { ITextProps } from "../types";

export default function TextArea({
    name,
    label,
    value,
    disabled,
    onChange,
    error
}: ITextProps) {
    // eslint-disable-next-line no-unneeded-ternary
    const [valueF, setValueF] = useState<string>(value ? value : "");
    const id = useRef(idGen(10)).current;

    useEffect(() => {
        if (value !== valueF && value) {
            setValueF(value);
        }
    }, [value]);

    return (
        <>
            <div
                className={`  ${error ? "border-red_text" : "border-border"} 
                h-20 p-1
                duration-200 border-b-2 
                rounded-md shadow-none 
                bg-neutral group border-border 
                focus-within:border-primary `}
            >
                <label
                    htmlFor={id}
                    className={`
                    ${error ? "text-red_text" : "text-subtitle"} 
                    ${
                        disabled ? "text-placeholder" : "text-subtitle"
                    } flex h-4 pl-4 text-xs font-bold duration-200 group-focus-within:text-primary text-description`}
                >
                    {label}
                </label>
                <textarea
                    autoComplete="off"
                    value={valueF}
                    name={name}
                    onChange={(e) => {
                        onChange(e.target.value);
                        setValueF(e.target.value);
                    }}
                    id={id}
                    disabled={disabled}
                    className="w-full h-14 px-4 duration-200 bg-transparent outline-none  peer text-title focus:"
                />
            </div>
            {error && (
                <p className="px-4 pt-1 text-xs text-red_text">{error}</p>
            )}
        </>
    );
}

TextArea.defaultProps = {
    label: "Placeholder",
    name: "",
    value: "",
    onChange: () => {
        return null;
    },
    disabled: false,
    error: false,
    password: false
};
