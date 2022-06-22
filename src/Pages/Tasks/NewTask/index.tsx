import React, { Fragment, useEffect } from "react";
import FormEl from "Components/Form";
import { useAppDispatch, useAppSelector } from "Store";
import Actions from "Store/Task";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NewForm from "./Components/NewForm";
import { ITask } from "../Dashboard/Components/Task/types";
import LinkDashboard from "./Components/LinkDashboard";

function EditTaskForm() {
  const dispatch = useAppDispatch();
  const taskState = useAppSelector((state) => state.task);
  const go = useNavigate();

  useEffect(() => {
    if (taskState.alt_navigate) {
      const teste = setTimeout(() => {
        go("/logged");
      }, 3000);
    }
  }, [taskState]);

  function onSubmit(e: Omit<ITask, "user_id" | "id">) {
    dispatch(Actions.create({ ...e }));
  }
  return (
    <div className="flex items-center justify-center flex-1">
      <ToastContainer
        position="top-right"
        limit={3}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <FormEl.Paper>
        <LinkDashboard />
        <FormEl.Title text="New task" />
        <FormEl.Subtitle text="Decide what's your next goal" />

        <NewForm
          onSubmit={(e) => {
            onSubmit(e);
          }}
          loading={taskState.alt_submit_loading}
        />
        <FormEl.Error error={taskState.alt_submit_error} />
      </FormEl.Paper>
    </div>
  );
}
export default EditTaskForm;
