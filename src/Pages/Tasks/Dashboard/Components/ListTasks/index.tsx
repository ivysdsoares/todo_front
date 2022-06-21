import { XCircleIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import React, { ReactNode, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "Store";
import Actions from "Store/Task";
import { array } from "yup";
import { ITask } from "Store/Task/types";
import Task from "../Task";

function LoadingErrorState({
  loading,
  error,
  children
}: {
  loading: boolean;
  error: string | false;
  children: ReactNode;
}) {
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error:{error}</div>;
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
function IsEmpty({
  length,
  children
}: {
  length: number;
  children: ReactNode;
}) {
  if (length === 0)
    return (
      <div className="flex-1 flex px-3 py-4 items-center justify-center text-lg font-semibold text-center whitespace-pre-wrap rounded-lg bg-background text-placeholder">
        No active tasks
      </div>
    );
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

function ListTasks() {
  const dispatch = useAppDispatch();
  const taskState = useAppSelector((state) => state.task);
  useEffect(() => {
    dispatch(Actions.getActive());
  }, []);
  return (
    <div className="flex flex-col items-stretch justify-start h-full max-h-full p-4 pt-0 overflow-scroll sm:max-w-1/2 min-h-52 bg-form shadow-elevation rounded-xl">
      <div className="sticky top-0 z-10 flex flex-col items-stretch pt-4 border-b border-border bg-form">
        <p className="px-4 text-2xl font-semibold text-title ">Active Tasks</p>
        <div className="flex items-center px-4 py-2 rounded-xl ">
          <div className="flex flex-1 p-2 px-4 duration-200 border-b-2 rounded-lg focus-within:text-primary focus-within:border-primary bg-neutral text-subtitle border-border">
            <SearchIcon className="w-5 " />
            <div className="w-2" />
            <input
              onChange={(e) => {
                dispatch(Actions.filterActive({ text: e.target.value }));
              }}
              className="flex-1 bg-transparent outline-none text-title"
            />
          </div>
        </div>
      </div>
      <div className="static flex flex-col items-stretch justify-start p-4 space-y-4 b-10 rounded-xl">
        <LoadingErrorState
          loading={taskState.loading_active}
          error={taskState.error_active}
        >
          <IsEmpty length={taskState.active_tasks.length}>
            {taskState.filtered_active.map((item, index) => (
              <Task
                key={item.id}
                color={item.color}
                title={item.title}
                description={item.description}
                id={item.id}
                expiration_date={new Date(item.expiration_date).toISOString()}
                onCancel={() => {}}
                onConfirm={() => {}}
                loading={false}
                active
              />
            ))}
          </IsEmpty>
        </LoadingErrorState>
      </div>
    </div>
  );
}

export default ListTasks;
