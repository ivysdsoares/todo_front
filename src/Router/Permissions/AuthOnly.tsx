import { Transition } from "@headlessui/react";
import React from "react";
import { Navigate } from "react-router-dom";

function AuthOnly({
  children,
  email
}: {
  children: JSX.Element;
  email: null | string;
}): JSX.Element {
  if (!email) {
    return <Navigate to="/" />;
  }
  return (
    <Transition
      as="div"
      className="h-full w-full flex flex-col items-center justify-start"
      show
      appear
      enter="transition transform duration-500"
      enterFrom="opacity-0  -translate-x-full"
      enterTo="opacity-100 opacity-0 -translate-x-0"
      leave="transition  transform duration-500"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-full"
    >
      {children}
    </Transition>
  );
}

export default AuthOnly;
