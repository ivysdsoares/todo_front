/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ISystemState } from "./types";

const initialState: ISystemState = {
    theme: "light"
};

export const systemSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        toggleMode: (state: ISystemState, action: PayloadAction<null>) => {
            if (state.theme === "light") {
                state.theme = "dark";
            } else {
                state.theme = "light";
            }
        }
    }
});
const { reducer } = systemSlice;
const Actions = { ...systemSlice.actions };
export { reducer };

export default Actions;
