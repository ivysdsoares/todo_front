import React, { useEffect, useRef, useState } from "react";
import idGen from "Functions/IdGen";
import { IDateProps } from "../types";
import Error from "../Error";

function Date({
  name,
  label,
  value,
  disabled,
  onChange,
  error,
  type
}: IDateProps) {
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
            h-12 p-1
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
                    } flex h-4 pl-4 text-xs font-bold duration-200 group-focus-within:text-primary `}
        >
          {label}
        </label>
        <input
          type={type}
          autoComplete="off"
          value={valueF}
          name={name}
          onChange={(e) => {
            onChange(e.target.value);
            setValueF(e.target.value);
          }}
          id={id}
          disabled={disabled}
          className="w-full h-6 px-4 duration-200 bg-transparent outline-none disabled:text-subtitle text-title focus:"
        />
      </div>
      <Error error={error} />
    </>
  );
}

export default Date;
Date.defaultProps = {
  label: "Placeholder",
  name: "",
  value: "",
  onChange: () => {
    return null;
  },
  disabled: false,
  error: false,
  type: "datetime-local"
};
