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
    <div className="flex flex-col items-stretch justify-start h-full max-h-full p-4 pt-0 overflow-scroll sm:max-w-1/2 min-h-52 bg-form shadow-elevation rounded-xl">
      <div className="sticky top-0 z-10 flex flex-col items-stretch pt-4 border-b border-border bg-form">
        <p className="px-4 text-2xl font-semibold text-title ">Active Tasks</p>
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
          loading={taskState.loading_active}
          error={taskState.error_active}
        >
          <EmptyState
            length={
              taskState.filtered_active.filter((i) => i.status === "ONGOING")
                .length
            }
          >
            {taskState.filtered_active.map((item) => (
              <Task
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
          </EmptyState>
        </LoadingErrorState>
      </div>
    </div>
  );
}

export default ListActive;
