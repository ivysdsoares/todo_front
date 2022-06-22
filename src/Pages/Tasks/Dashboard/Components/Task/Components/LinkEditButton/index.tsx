import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/solid";
import React from "react";

function LinkEditButton({ id }: { id: number }) {
  return (
    <Link
      to={`edit-task/${id}`}
      className="p-1 absolute right-1 top-1 duration-200 rounded-md outline-none text-placeholder hover:bg-neutral hover:text-primary hover:shadow focus-visible:bg-neutral focus-visible:text-primary focus-visible:shadow active:brightness-90"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export default LinkEditButton;
