import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "Store";
import Actions from "Store/Task";
import LoadingErrorState from "../LoadingErrorState";

function Report() {
  const taskState = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(Actions.getReport());
  }, []);
  return (
    <div className="shadow-elevation flex-1 flex bg-form top-1/2 rounded-xl p-4">
      <div className="flex flex-1 flex-col items-stretch">
        <p className="px-4 py-2 text-2xl font-semibold text-title ">Stats</p>
        <div className="h-2" />
        <LoadingErrorState
          loading={taskState.loading_report}
          error={taskState.error_report}
        >
          <div className="flex border-blue_text border-l-4 justify-start items-center">
            <p className="pl-2 w-28 font-semibold text-subtitle">OnGoing:</p>
            <p className="font-bold flex-1 text-center text-title">
              {taskState.report_task?.ongoing}
            </p>
          </div>
          <div className="h-1" />
          <div className="flex border-green_text border-l-4 justify-start items-center">
            <p className="pl-2 w-28 font-semibold text-subtitle">Completed:</p>
            <p className="font-bold  flex-1  text-center text-title">
              {taskState.report_task?.complete}
            </p>
          </div>
          <div className="h-1" />
          <div className="flex border-red_text border-l-4 justify-start items-center">
            <p className="pl-2 w-28 font-semibold text-subtitle">Canceled:</p>
            <p className="font-bold flex-1  text-center text-title">
              {taskState.report_task?.failed}
            </p>
          </div>
          <div className="h-1" />
          <div className="flex border-yellow_text border-l-4 justify-start items-center">
            <p className="pl-2 w-28 font-semibold text-subtitle">Expired:</p>
            <p className="font-bold text-title flex-1 text-center">
              {taskState.report_task?.expired}
            </p>
          </div>
        </LoadingErrorState>
      </div>
    </div>
  );
}

export default Report;
