/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthState } from "./types";

const initialState: IAuthState = {
    name: "",
    token: ""
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        toggleMode: (state: IAuthState, action: PayloadAction<null>) => {
            if (state.name === "light") {
                state.name = "dark";
            } else {
                state.name = "light";
            }
        }
    }
});
const { reducer } = userSlice;
export { reducer };
const Actions = { ...userSlice.actions };
export default Actions;
