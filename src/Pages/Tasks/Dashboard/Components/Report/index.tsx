import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "Store";
import Actions from "Store/Task";

function Report() {
  const taskState = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(Actions.getReport());
  });
  return (
    <div className="shadow-elevation flex bg-form top-1/2 rounded-xl p-4">
      <div className="flex flex-col">
        <p className="px-4 text-2xl font-semibold ">Stats</p>
        <div className="h-2" />
        <div className="flex justify-start items-center">
          <div className="bg-gradient-to-tl from-blue to-blue_text w-2 h-2 rounded-full flex justify-center items-center" />
          <p className="pl-2 flex-1 font-semibold text-subtitle">OnGoing:</p>
          <p className="font-bold text-title">
            {taskState.report_task?.ongoing}
          </p>
        </div>
        <div className="flex justify-start items-center">
          <div className="bg-gradient-to-tl from-green to-green_text w-2 h-2 rounded-full flex justify-center items-center" />
          <p className="pl-2 flex-1 font-semibold text-subtitle">Completed:</p>
          <p className="font-bold text-title">
            {taskState.report_task?.complete}
          </p>
        </div>
        <div className="flex justify-start items-center">
          <div className="bg-gradient-to-tl  from-red to-red_text  w-2 h-2 rounded-full flex justify-center items-center" />
          <p className="pl-2  flex-1 font-semibold text-subtitle">Canceled:</p>
          <p className="font-bold text-title">
            {taskState.report_task?.failed}
          </p>
        </div>
        <div className="flex justify-start items-center">
          <div className="bg-gradient-to-tl  from-yellow to-yellow_text w-2 h-2 rounded-full flex justify-center items-center" />
          <p className="pl-2 flex-1 font-semibold text-subtitle">Expired:</p>
          <p className="font-bold text-title pl-2">
            {taskState.report_task?.expired}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Report;
