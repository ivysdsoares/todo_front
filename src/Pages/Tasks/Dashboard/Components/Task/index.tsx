import { Transition } from "@headlessui/react";
import { PencilIcon } from "@heroicons/react/solid";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { ITaskCardProps, ITask } from "./types";
import Components from "./Components";

function getBorderColor(e: number) {
  switch (e) {
    case 1:
      return "border-yellow_text";
    case 2:
      return "border-green_text";
    case 3:
      return "border-blue_text";
    default:
      return "border-background";
  }
}
function TaskComponent({
  id,
  active,
  title,
  description,
  expiration_date,
  color,
  onCancel,
  onConfirm,
  status,
  loading
}: ITaskCardProps) {
  return (
    <div
      className={`flex flex-col relative bg-menu shadow-card border-t-8 z-0 items-stretch  ${getBorderColor(
        color
      )} task-card${active ? "-active" : ""} `}
    >
      <Components.LinkEditButton id={id} />
      <div className="px-4  pt-4 pb-0">
        <p className=" text-title font-bold pr-4">{title}</p>
        <p className="text-xs font-semibold text-placeholder">
          {new Date().toISOString() < expiration_date
            ? "Expires:\xa0"
            : "Expired in \xa0"}

          {new Date(expiration_date).toLocaleString("pt-BR")}
        </p>

        <p className=" text-description whitespace-pre-wrap">{description}</p>
      </div>

      <div className="flex flex-col items-stretch p-4 pt-0">
        <div className="h-[1px] bg-border my-2" />
        <div className="flex items-center">
          {status === "ONGOING" && (
            <>
              <Components.ChangeStatusButton
                color="red"
                loading={loading}
                onClick={() => {
                  onCancel({
                    id,
                    color,
                    expiration_date,
                    title,
                    description,
                    status: "FAILED"
                  });
                }}
                title="GIVE UP?"
              />
              <div className="w-2" />
              <Components.ChangeStatusButton
                color="green"
                loading={loading}
                onClick={() => {
                  onConfirm({
                    id,
                    color,
                    expiration_date,
                    title,
                    description,
                    status: "COMPLETE"
                  });
                }}
                title="FINISH?"
              />
            </>
          )}

          <Components.Status status={status} />
        </div>
      </div>
    </div>
  );
}
TaskComponent.defaultProps = {
  onConfirm: () => {
    return null;
  },
  onCancel: () => {
    return null;
  }
};

const Task = memo(TaskComponent);
export default Task;
