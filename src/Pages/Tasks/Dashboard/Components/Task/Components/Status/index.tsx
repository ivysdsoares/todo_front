import React, { memo } from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationIcon
} from "@heroicons/react/solid";

function StatusComponent({ status }: { status: string }) {
  if (status === "COMPLETE")
    return (
      <div className="flex items-center p-1 pl-2 pr-4 rounded-full shadow-lg bg-green_text text-form">
        <CheckCircleIcon className="w-6" />
        <div className="w-2" />
        <p className="font-semibold">COMPLETE</p>
      </div>
    );
  if (status === "EXPIRED")
    return (
      <div className="flex items-center p-1 pl-2 pr-4 rounded-full shadow-lg bg-yellow_text text-form">
        <ExclamationIcon className="w-6" />
        <div className="w-2" />
        <p className="font-semibold">EXPIRED</p>
      </div>
    );
  if (status === "FAILED")
    return (
      <div className="flex items-center p-1 pl-2 pr-4 rounded-full  shadow-lg bg-red_text text-form">
        <XCircleIcon className="w-6" />
        <div className="w-2" />
        <p className="font-semibold">CANCELLED</p>
      </div>
    );

  return <div className="hidden" />;
}
const Status = memo(StatusComponent);
export default Status;
