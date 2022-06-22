import React, { useEffect } from "react";
import Actions from "Store/Task";
import { useAppDispatch, useAppSelector } from "Store";
import Task from "../Task";
import LoadingErrorState from "../LoadingErrorState";
import EmptyState from "../EmptyState";
import SearchInput from "../SearchInput";

function ListInactive() {
  const dispatch = useAppDispatch();
  const taskState = useAppSelector((state) => state.task);

  useEffect(() => {
    dispatch(Actions.getInactive());

    return () => {
      dispatch(Actions.cleanUp());
    };
  }, []);

  return (
    <div className="flex flex-col items-stretch justify-start h-full sm:max-h-full max-h-96 p-4 pt-0 overflow-scroll min-h-96 bg-form shadow-elevation rounded-xl">
      <div className="sticky top-0 z-10 flex flex-col items-stretch pt-4 bg-form">
        <p className="px-4 py-2 text-2xl font-semibold text-title ">
          Inactive Tasks
        </p>
        <div className="flex items-center px-4 py-2 pb-3 rounded-xl ">
          <SearchInput
            onChange={(e) => {
              dispatch(Actions.filterInactive(e));
            }}
            onClear={() => {
              dispatch(Actions.filterInactive(""));
            }}
          />
        </div>
        <div className="flex px-4">
          <div className="flex-1 border-b border-border" />
        </div>
      </div>
      <LoadingErrorState
        loading={taskState.loading_inactive}
        error={taskState.error_inactive}
      >
        <EmptyState length={taskState.filtered_inactive.length}>
          <div className="static flex flex-col items-stretch justify-start p-4 space-y-4 b-10 rounded-xl">
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
          </div>
        </EmptyState>
      </LoadingErrorState>
    </div>
  );
}

export default ListInactive;
