import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "Services/api";
import {
  ILoginPayload,
  ILoginReturn,
  IGoogleLoginPayload,
  ISignInPayload,
  ISignInReturn
} from "./types";

const login = createAsyncThunk(
  "user/login",
  async (payload: ILoginPayload, { dispatch, rejectWithValue, getState }) => {
    return Api.post(`user/login`, payload)
      .then(
        (res) =>
          ({
            email: res.data.email,
            id: res.data.id,
            name: res.data.name
          } as ILoginReturn)
      )
      .catch((err) => {
        return rejectWithValue({
          error: err.response.data.message || "Unexpected error ocurred"
        }as {error:string});
      });
  }
);

const googleLogin = createAsyncThunk(
  "user/google-login",
  async (
    payload: IGoogleLoginPayload,
    { dispatch, rejectWithValue, getState }
  ) =>
    Api.post(`user/gmail`, payload)
      .then(
        (res) =>
          ({
            id: res.data.id,
            name: payload.name,
            email: payload.email
          } as ILoginReturn)
      )
      .catch((err) => {
        return rejectWithValue({
          error: err.response.data.message || "Unexpected error ocurred"
        });
      })
);
const signUp = createAsyncThunk(
  "user/signup",
  async (payload: ISignInPayload, { dispatch, rejectWithValue, getState }) =>
    Api.post(`user/create`, payload)
      .then(
        (res) =>
          ({
            email: payload.email,
            name: payload.name,
            id: res.data.id
          } as ISignInReturn)
      )
      .catch((err) => {
        return rejectWithValue({
          error: err.response.data.message || "Unexpected error ocurred"
        });
      })
);

export default { login, googleLogin, signUp };
