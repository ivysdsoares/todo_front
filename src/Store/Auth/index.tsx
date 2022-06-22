/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthState, ILoginReturn, ISignInReturn } from "./types";
import thunks from "./thunks";

const initialState: IAuthState = {
  id: 0,
  name: null,
  email: null,
  error: false,
  loading: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onSubmit: (state: IAuthState, action: PayloadAction<IAuthState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.error = action.payload.error;
    },
    failedGoogleSubmit: (state: IAuthState) => {
      state.error = "Failed connecting to Google";
    },
    removeAuth: (state: IAuthState) => {
      state.name = initialState.name;
      state.email = initialState.email;
      state.error = initialState.error;
    },
    cleanup:(state:IAuthState)=>{
      Object.assign(state,initialState)
    }
  },

  extraReducers: (builder) => {
    builder.addCase(thunks.login.pending, (state: IAuthState, action) => {
      state.loading = true;
    }),
      builder.addCase(
        thunks.login.fulfilled,
        (state: IAuthState, action: PayloadAction<ILoginReturn>) => {
          state.loading = false;
          state.id = action.payload.id;
          state.email = action.payload.email;
          state.name = action.payload.name;
        }
      ),
      builder.addCase(
        thunks.login.rejected,
        (state: IAuthState, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.error;
        }
      );
    // google login
    builder.addCase(thunks.googleLogin.pending, (state: IAuthState, action) => {
      state.loading = true;
    }),
      builder.addCase(
        thunks.googleLogin.fulfilled,
        (state: IAuthState, action: PayloadAction<ILoginReturn>) => {
          state.loading = false;
          state.id = action.payload.id;
          state.email = action.payload.email;
          state.name = action.payload.name;
        }
      ),
      builder.addCase(
        thunks.googleLogin.rejected,
        (state: IAuthState, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.error;
        }
      );
    // sign in
    builder.addCase(thunks.signUp.pending, (state: IAuthState, action) => {
      state.loading = true;
    }),
      builder.addCase(
        thunks.signUp.fulfilled,
        (state: IAuthState, action: PayloadAction<ILoginReturn>) => {
          state.loading = false;
          state.id = action.payload.id;
          state.email = action.payload.email;
          state.name = action.payload.name;
        }
      ),
      builder.addCase(
        thunks.signUp.rejected,
        (state: IAuthState, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload.error;
        }
      );
  }
});
export const { reducer } = userSlice;
const Actions = { ...userSlice.actions, ...thunks };
export default Actions;
