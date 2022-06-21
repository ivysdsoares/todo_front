import React, { Fragment, useEffect, useRef, useState } from "react";
import idGen from "Functions/IdGen";
import { Listbox, Transition } from "@headlessui/react";
import { ISelectProps, ISelectOptions } from "../types";
import Error from "../Error";

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
  const [valueF, setValueF] = useState<string>(value ? value : "");
  const [selectedLabel, setSelected] = useState<string | number>("");
  const id = useRef(idGen(10)).current;

  useEffect(() => {
    if (value !== valueF && value) {
      setValueF(value);
      const filtered = options.filter((a) => value === a.value);
      if (filtered.length > 0) {
        setSelected(filtered[0].label);
      }
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
              className={`flex flex-col h-12 p-1 duration-200 border-b-2 rounded-md  bg-neutral group border-border group-focus-within:border-primary ${
                error ? "border-red_text" : "border-border"
              }  `}
            >
              <p
                className={`flex h-4 pl-4 text-xs font-bold duration-200 group-focus-within:text-primary  ${
                  error ? "text-red_text" : "text-subtitle"
                } 
                                ${
                                  disabled
                                    ? "text-placeholder"
                                    : "text-subtitle"
                                } `}
              >
                {label}
              </p>
              <p className="px-4">{selectedLabel}</p>
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
              className="absolute w-full bg-menu rounded-md top-[3.5rem] shadow-elevation"
            >
              <Listbox.Options static>
                {options.map((item: ISelectOptions) => (
                  <Listbox.Option
                    as={Fragment}
                    key={item.value}
                    value={item.value}
                  >
                    {({ active, selected }) => (
                      <li
                        className={`flex items-center p-2 last:border-0 first:rounded-t-md last:rounded-b-md border-b bg-menu duration-200 border-border ${
                          active ? "brightness-95" : "brightness-100"
                        } ${selected ? "border-r-2 border-primary" : ""}`}
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
