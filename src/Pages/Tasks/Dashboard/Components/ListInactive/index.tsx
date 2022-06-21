import React, { useEffect } from "react";
import Actions from "Store/Task";
import { useAppDispatch, useAppSelector } from "Store";
import { ITask } from "../Task/types";
import Task from "../Task";
import LoadingErrorState from "../LoadingErrorState";
import EmptyState from "../EmptyState";
import SearchInput from "../SearchInput";

function ListInactive() {
  const dispatch = useAppDispatch();
  const taskState = useAppSelector((state) => state.task);
  console.log(taskState.filtered_inactive);
  useEffect(() => {
    dispatch(Actions.getInactive());

    return () => {
      dispatch(Actions.cleanUp());
    };
  }, []);

  return (
    <div className="flex flex-col items-stretch justify-start h-full max-h-full p-4 pt-0 overflow-scroll sm:max-w-1/2 min-h-52 bg-form shadow-elevation rounded-xl">
      <div className="sticky top-0 z-10 flex flex-col items-stretch pt-4 border-b border-border bg-form">
        <p className="px-4 text-2xl font-semibold text-title ">
          Inactive Tasks
        </p>
        <div className="flex items-center px-4 py-2 rounded-xl ">
          <SearchInput
            onChange={(e) => {
              dispatch(Actions.filterActive({ text: e }));
            }}
          />
        </div>
      </div>
      <div className="static flex flex-col items-stretch justify-start p-4 space-y-4 b-10 rounded-xl">
        <LoadingErrorState
          loading={taskState.loading_inactive}
          error={taskState.error_inactive}
        >
          <EmptyState length={taskState.filtered_inactive.length}>
            {taskState.filtered_inactive.map((item) => (
              <Task
                status={item.status}
                key={item.id}
                color={item.color}
                title={item.title}
                description={item.description}
                id={item.id}
                expiration_date={new Date(item.expiration_date).toISOString()}
                active
              />
            ))}
          </EmptyState>
        </LoadingErrorState>
      </div>
    </div>
  );
}

export default ListInactive;
