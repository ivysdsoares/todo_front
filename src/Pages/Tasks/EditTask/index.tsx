import React, { Fragment, useEffect } from "react";
import FormEl from "Components/Form";
import { useAppDispatch, useAppSelector } from "Store";
import Actions from "Store/Task";
import { ReplyIcon } from "@heroicons/react/outline";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import EditForm from "./Components/EditForm";
import LoadingErrorState from "./Components/LoadingErrorState";
import { ITask } from "../Dashboard/Components/Task/types";

function EditTaskForm() {
  const dispatch = useAppDispatch();
  const taskState = useAppSelector((state) => state.task);
  const { id } = useParams();
  const go = useNavigate();

  useEffect(() => {
    dispatch(Actions.detail(id ? parseInt(id, 10) : 0));
  }, []);
  useEffect(() => {
    if (taskState.alt_navigate) {
      const teste = setTimeout(() => {
        go("/logged");
      }, 3000);
    }
  }, [taskState]);
  function onSubmit(e: Omit<ITask, "user_id" & "id">) {
    dispatch(Actions.edit({ ...e, id: id ? parseInt(id, 10) : 0 }));
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
        <Link
          to="/logged"
          className=" absolute top-1 duration-200 hover:text-primary outline-none active:brightness-90 focus-visible:text-primary right-1 flex items-center justify-center p-2 rounded-full text-subtitle hover:bg-neutral"
        >
          <ReplyIcon className="w-5" />
        </Link>
        <FormEl.Title text="Edit Task" />
        <FormEl.Subtitle text="Change something about yout goal" />
        <LoadingErrorState
          loading={taskState.alt_loading}
          error={taskState.alt_error}
        >
          <EditForm
            onSubmit={(e) => {
              onSubmit(e);
            }}
            initialValues={taskState.alt_task}
            loading={taskState.alt_submit_loading}
          />
          <FormEl.Error error={taskState.alt_submit_error} />
        </LoadingErrorState>
      </FormEl.Paper>
    </div>
  );
}
export default EditTaskForm;
