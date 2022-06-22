import React, { memo } from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationIcon
} from "@heroicons/react/solid";

function StatusComponent({ status }: { status: string }) {
  if (status === "COMPLETE")
    return (
      <div className="flex items-center p-1 pl-2 pr-4 rounded-full bg-green text-green_text">
        <CheckCircleIcon className="w-6" />
        <div className="w-2" />
        <p className="font-semibold">COMPLETE</p>
      </div>
    );
  if (status === "EXPIRED")
    return (
      <div className="flex items-center p-1 pl-2 pr-4 rounded-full bg-yellow text-yellow_text">
        <ExclamationIcon className="w-6" />
        <div className="w-2" />
        <p className="font-semibold">EXPIRED</p>
      </div>
    );
  if (status === "FAILED")
    return (
      <div className="flex items-center p-1 pl-2 pr-4 rounded-full bg-red text-red_text">
        <XCircleIcon className="w-6" />
        <div className="w-2" />
        <p className="font-semibold">CANCELLED</p>
      </div>
    );

  return <div className="hidden" />;
}
const Status = memo(StatusComponent);
export default Status;
