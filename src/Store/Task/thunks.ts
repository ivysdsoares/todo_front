import { ThunkAction,createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "Services/api";
import { ITaskPayload, ITask, IReportTask } from "./types";
import { IAuthState } from "../Auth/types";

const getActive = createAsyncThunk(
  "task/get-active",
  async (payload: undefined, { dispatch, rejectWithValue, getState }) => {
    const params = getState() as { auth: IAuthState };
    return Api.get(`tasks/active/${params.auth.id}`)
      .then((res) => res.data as Array<ITask>)
      .catch((err) => {
        return rejectWithValue({
          error: err.response.data.message || "Unexpected error ocurred"
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
          error: err.response.data.message || "Unexpected error ocurred"
        });
      });
  }
);
const getReport = createAsyncThunk(
  "task/get-report",
  async (payload:undefined, { dispatch, rejectWithValue, getState }) => {
    const params = getState() as { auth: IAuthState };
    return Api.get(`tasks/report/${params.auth.id}}`)
      .then((res) => res.data as IReportTask)
      .catch((err) => {
        return rejectWithValue({
          error: err.response.data.message || "Unexpected error ocurred"
        });
      });
  }
);

export default { getActive, getInactive, getReport };