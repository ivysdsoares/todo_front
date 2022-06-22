import React, { Fragment, useEffect, useRef, useState } from "react";
import idGen from "Functions/IdGen";
import { Listbox, Transition } from "@headlessui/react";
import { ISelectProps, ISelectOptions } from "../types";
import Error from "../Error";

function getLabel(options: Array<ISelectOptions>, value: string): string {
  const filtered = options.filter((a) => a.value === value);
  if (filtered.length > 0) {
    return filtered[0].label;
  }
  return "";
}

function Select({
  name,
  label,
  value,
  disabled,
  onChange,
  error,
  options
}: ISelectProps) {
  // eslint-disable-next-line no-unneeded-ternary
  const [valueF, setValueF] = useState<string | number>(value ? value : "");
  const [selectedLabel, setSelected] = useState<string | number>(
    getLabel(options, value)
  );
  const id = useRef(idGen(10)).current;

  useEffect(() => {
    if (value !== valueF && value) {
      setValueF(value);
      setSelected(getLabel(options, value));
    }
  }, [value]);

  return (
    <>
      <Listbox
        id={id}
        as="div"
        className="relative flex flex-col items-stretch group"
        value={value}
        disabled={disabled}
        onChange={onChange}
      >
        {({ open }) => (
          <>
            <Listbox.Button
              className={`flex flex-col h-12 p-1 outline-none duration-200 border-b-2 rounded-md  bg-neutral group group-focus-within:border-primary 
              ${error ? "border-red_text" : "border-border"}`}
            >
              <p
                className={`
                ${error && "text-red_text"} 
                ${disabled && "text-placeholder"} 
                ${!disabled && !error && "text-subtitle"}
                flex h-4 pl-4 text-xs font-bold duration-200 group-focus-within:text-primary`}
              >
                {label}
              </p>
              <p className="px-4 text-title">{selectedLabel}</p>
            </Listbox.Button>
            <Transition
              show={open}
              as="div"
              enter="duration-200"
              enterFrom="-translate-y-1/2 opacity-50"
              enterTo=" translate-y-0 opacity-100"
              leave="duration-200"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="-translate-y-1/2 opacity-0"
              className="absolute w-full bg-menu   z-10 rounded-md top-[3.5rem] shadow-elevation"
            >
              <Listbox.Options static className="outline-none text-title">
                {options.map((item: ISelectOptions) => (
                  <Listbox.Option
                    as={Fragment}
                    key={item.value}
                    value={item.value}
                  >
                    {({ active, selected }) => (
                      <li
                        className={`flex items-center p-2 last:border-b-0 first:rounded-t-md last:rounded-b-md border-b bg-menu duration-200 border-border ${
                          active ? "brightness-95" : "brightness-100"
                        } ${selected ? "border-r-4 border-r-primary" : ""}`}
                      >
                        {item.mod && (
                          <div
                            className={`bg-${item.mod} w-3 h-3 mr-2 rounded-full`}
                          />
                        )}

                        {item.label}
                      </li>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
      <Error error={error} />
    </>
  );
}
export default Select;
Select.defaultProps = {
  label: "Placeholder",
  name: "",
  value: "",
  onChange: () => {
    return null;
  },
  disabled: false,
  error: false,
  password: false,
  options: []
};
