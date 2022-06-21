import { Transition } from "@headlessui/react";
import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

function NoAuthOnly({
  children,
  email
}: {
  children: JSX.Element;
  email: null | string;
}): JSX.Element {
  if (email) {
    return <Navigate to="/logged" />;
  }

  return (
    <Transition
      as="div"
      className=" flex flex-col  flex-1 items-stretch justify-start"
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

export default NoAuthOnly;
