import React, { useEffect } from "react";
import Actions from "Store/Task";
import { useAppDispatch, useAppSelector } from "Store";
import { ITask } from "../Task/types";
import Task from "../Task";
import LoadingErrorState from "../LoadingErrorState";
import EmptyState from "../EmptyState";
import SearchInput from "../SearchInput";

function ListActive() {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.auth);
  const taskState = useAppSelector((state) => state.task);

  useEffect(() => {
    dispatch(Actions.getActive());

    return () => {
      dispatch(Actions.cleanUp());
    };
  }, []);

  function OnDecide(task: ITask) {
    dispatch(Actions.changeStatus({ ...task, user_id: userState.id || 0 }));
  }

  return (
    <div className="flex flex-col items-stretch justify-start h-full flex-1 p-4 px-0 sm:px-4 pt-0 overflow-scroll max-h-96 sm:max-h-full  sm:max-w-1/2 min-h-96 bg-form shadow-elevation rounded-xl">
      <div className="sticky top-0 z-10 flex flex-col items-stretch pt-4 bg-form">
        <p className="px-4 py-2 text-2xl font-semibold text-title ">
          Active Tasks
        </p>
        <div className="flex items-center px-4 py-2 pb-3 rounded-xl ">
          <SearchInput
            onChange={(e) => {
              dispatch(Actions.filterActive(e));
            }}
            onClear={() => {
              dispatch(Actions.filterActive(""));
            }}
          />
        </div>
        <div className="flex px-4">
          <div className="flex-1 border-b border-border" />
        </div>
      </div>

      <LoadingErrorState
        loading={taskState.loading_active}
        error={taskState.error_active}
      >
        <EmptyState
          length={
            taskState.filtered_active.filter((i) => i.status === "ONGOING")
              .length
          }
        >
          <div className="flex flex-col items-stretch justify-start p-4 space-y-4 b-10 rounded-xl">
            {taskState.filtered_active.map((item) => (
              <Task
                loading={taskState.loading_notify === item.id}
                status="ONGOING"
                key={item.id}
                color={item.color}
                title={item.title}
                description={item.description}
                id={item.id}
                expiration_date={item.expiration_date}
                onCancel={(task) => OnDecide(task)}
                onConfirm={(id) => OnDecide(id)}
                active={item.status === "ONGOING"}
              />
            ))}
          </div>
        </EmptyState>
      </LoadingErrorState>
    </div>
  );
}

export default ListActive;
