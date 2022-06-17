/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthState } from "./types";

const initialState: IAuthState = {
    name: null,
    email: null,
    error: false,
    loading: false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        onSubmit: (state, action: PayloadAction<IAuthState>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.error = action.payload.error;
        },
        removeAuth: (state, action: PayloadAction<void>) => {
            state.name = initialState.name;
            state.email = initialState.email;
            state.error = initialState.error;
        }
    }
});
const { reducer } = userSlice;
export { reducer };
const Actions = { ...userSlice.actions };
export default Actions;
