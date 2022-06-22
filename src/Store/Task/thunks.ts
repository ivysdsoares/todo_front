import {
  createAsyncThunk
} from "@reduxjs/toolkit";
import Api from "Services/api";
import { ITaskPayload, ITask, IReportTask ,ITaskStatusReturn} from "./types";
import { IAuthState } from "../Auth/types";

const getActive = createAsyncThunk(
  "task/get-active",
  async (payload: undefined, { dispatch, rejectWithValue, getState }) => {
    const params = getState() as { auth: IAuthState };
    return Api.get(`tasks/active/${params.auth.id}`)
      .then((res) => res.data as Array<ITask>)
      .catch((err) => {
        return rejectWithValue({
          error:
            err.response.data && err.response.data.message
              ? err.response.data.message
              : "Unexpected error ocurred"
        });
      });
  }
);

const getInactive = createAsyncThunk(
  "task/get-inactive",
  async (payload: undefined, { dispatch, rejectWithValue, getState }) => {
    const params = getState() as { auth: IAuthState };
    return Api.get(`tasks/inactive/${params.auth.id}`)
      .then((res) => res.data as Array<ITask>)
      .catch((err) => {
        return rejectWithValue({
          error:
            err.response.data && err.response.data.message
              ? err.response.data.message
              : "Unexpected error ocurred"
        });
      });
  }
);
const getReport = createAsyncThunk(
  "task/get-report",
  async (payload: undefined, { dispatch, rejectWithValue, getState }) => {
    const params = getState() as { auth: IAuthState };
    return Api.get(`tasks/report/${params.auth.id}`)
      .then((res) => res.data as IReportTask)
      .catch((err) => {
        return rejectWithValue({
          error:
            err.response.data && err.response.data.message
              ? err.response.data.message
              : "Unexpected error ocurred"
        });
      });
  }
);

const changeStatus = createAsyncThunk(
  "task/change-status",
  async (payload: ITask, { dispatch, rejectWithValue, getState }) => {
    return Api.put(`tasks/edit`,{...payload})
      .then((res) => ({id:res.data.id,status:payload.status }) as ITaskStatusReturn)
      .catch((err) => {
        return rejectWithValue({
          error:
            err.response.data && err.response.data.message
              ? err.response.data.message
              : "Unexpected error ocurred"
        });
      });
  }
);
const detail = createAsyncThunk(
  "task/detail",
  async (payload:number, { dispatch, rejectWithValue, getState }) => {
    const params = getState() as { auth: IAuthState };
    return Api.post(`tasks`,{id:payload ,user_id:params.auth.id})
      .then((res) => res.data as ITask)
      .catch((err) => {
        return rejectWithValue({
          error:
            err.response.data && err.response.data.message
              ? err.response.data.message
              : "Unexpected error ocurred"
        });
      });
  }
);
const edit = createAsyncThunk(
  "task/edit",
  async (payload:Omit<ITask,'user_id'>, { dispatch, rejectWithValue, getState }) => {
    const params = getState() as { auth: IAuthState };
    return Api.put(`/tasks/edit`,{...payload ,user_id:params.auth.id})
      .then((res) => res.data as ITask)
      .catch((err) => {
        return rejectWithValue({
          error:
            err.response.data && err.response.data.message
              ? err.response.data.message
              : "Unexpected error ocurred"
        });
      });
  }
);
const create = createAsyncThunk(
  "task/create",
  async (payload:Omit<ITask,'user_id'|'id'>, { dispatch, rejectWithValue, getState }) => {
    const params = getState() as { auth: IAuthState };
    return Api.post(`/tasks/create`,{...payload ,user_id:params.auth.id})
      .then((res) => res.data as {id:number})
      .catch((err) => {
        return rejectWithValue({
          error:
            err.response.data && err.response.data.message
              ? err.response.data.message
              : "Unexpected error ocurred"
        });
      });
  }
);

export default { getActive, getInactive, getReport ,changeStatus,detail,create,edit};
