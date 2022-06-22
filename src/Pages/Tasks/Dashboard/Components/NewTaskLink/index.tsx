import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";
import React from "react";

function NewTaskLink() {
  return (
    <Link
      to="new-task"
      className="fixed text-background hover:brightness-110 z-20 bottom-3 right-3 duration-200 active:brightness-90 outline-none focus-visible:brightness-110 rounded-full bg-gradient-to-r from-primary focus-visible:scale-105 hover:scale-105 active:scale-95 to-secondary p-4 shadow-fab"
    >
      <PlusIcon className="w-8  h-8" />
    </Link>
  );
}

export default NewTaskLink;
