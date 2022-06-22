import React from "react";
import { ReplyIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function LinkDashboard() {
  return (
    <Link
      to="/logged"
      className=" absolute top-1 duration-200 hover:text-primary outline-none active:brightness-90 focus-visible:text-primary right-1 flex items-center justify-center focus-visible:bg-neutral p-2 rounded-full text-subtitle hover:bg-neutral"
    >
      <ReplyIcon className="w-5" />
    </Link>
  );
}

export default LinkDashboard;
