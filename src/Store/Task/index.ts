/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import thunks from "./thunks";
import {
  ITaskState,
  ITask,
  IReportTask,
  ITaskPayload,
  ITaskStatusReturn
} from "./types";

const initialState: ITaskState = {
  // Active
  error_active: false,
  loading_active: true,
  active_tasks: [],
  filtered_active: [],
  // Inactive
  error_inactive: false,
  loading_inactive: true,
  inactive_task: [],
  filtered_inactive: [],
  // DashBoard
  loading_notify: false,
  notify: 0,
  // Report
  error_report: false,
  loading_report: true,
  report_task: null,
  // Create - Edit
  create_status: 0,
  edit_status: 0,
  alt_error: false,
  alt_loading: true
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    cleanUp: (state: ITaskState, action: PayloadAction<undefined>) => {
      Object.assign(state, initialState);
    },
    filterActive: (
      state: ITaskState,
      action: PayloadAction<{ text: string }>
    ) => {
      state.filtered_active = state.active_tasks.filter(
        (a) =>
          a.title.toLowerCase().includes(action.payload.text.toLowerCase()) ||
          a.description
            .toLowerCase()
            .includes(action.payload.text.toLowerCase())
      );
    },
     filterInactive: (
      state: ITaskState,
      action: PayloadAction<{ text: string }>
    ) => {
      state.filtered_inactive = state.inactive_task.filter(
        (a) =>
          a.title.toLowerCase().includes(action.payload.text.toLowerCase()) ||
          a.description
            .toLowerCase()
            .includes(action.payload.text.toLowerCase())
      );
    }
  },
  extraReducers: (builder) => {
    // active
    builder.addCase(thunks.getActive.pending, (state: ITaskState, action) => {
      state.loading_active = true;
    }),
      builder.addCase(
        thunks.getActive.fulfilled,
        (state: ITaskState, action: PayloadAction<Array<ITask>>) => {
          state.loading_active = false;
          state.active_tasks = action.payload;
          state.filtered_active = action.payload;
        }
      ),
      builder.addCase(
        thunks.getActive.rejected,
        (state: ITaskState, action: PayloadAction<any>) => {
          state.loading_active = false;
          state.error_active = action.payload.error;
        }
      );

    // inactive
    builder.addCase(thunks.getInactive.pending, (state: ITaskState, action) => {
      state.loading_inactive = true;
    }),
      builder.addCase(
        thunks.getInactive.fulfilled,
        (state: ITaskState, action: PayloadAction<Array<ITask>>) => {
          state.loading_inactive = false;
          state.inactive_task = action.payload;
          state.filtered_inactive=action.payload
        }
      ),
      builder.addCase(
        thunks.getInactive.rejected,
        (state: ITaskState, action: PayloadAction<any>) => {
          state.loading_inactive = false;
          state.error_inactive = action.payload.error;
        }
      );
    // report
    builder.addCase(thunks.getReport.pending, (state: ITaskState, action) => {
      state.loading_report = true;
    }),
      builder.addCase(
        thunks.getReport.fulfilled,
        (state: ITaskState, action: PayloadAction<IReportTask>) => {
          state.loading_report = false;
          state.report_task = action.payload;
        }
      ),
      builder.addCase(
        thunks.getReport.rejected,
        (state: ITaskState, action: PayloadAction<any>) => {
          state.loading_report = false;
          state.error_report = action.payload.error;
        }
      );
    // change status
    builder.addCase(
      thunks.changeStatus.pending,
      (state: ITaskState, action) => {
        state.loading_report = true;
      }
    ),
      builder.addCase(
        thunks.changeStatus.fulfilled,
        (state: ITaskState, action: PayloadAction<ITaskStatusReturn>) => {
          state.loading_notify = false;
          toast.success(`Task edited successfully`);
          state.inactive_task.push(
            state.active_tasks.filter((i) => i.id === action.payload.id)[0]
          );

          state.active_tasks = state.active_tasks.map((item) => {
            if (item.id === action.payload.id) {
              return {
                id: item.id,
                color: item.color,
                user_id: item.user_id,
                title: item.title,
                description: item.description,
                expiration_date: item.expiration_date,
                status: action.payload.status
              };
            }
            return item;
          });
              state.filtered_active =  state.filtered_active.map((item) => {
            if (item.id === action.payload.id) {
              return {
                id: item.id,
                color: item.color,
                user_id: item.user_id,
                title: item.title,
                description: item.description,
                expiration_date: item.expiration_date,
                status: action.payload.status
              };
            }
            return item;
          });;
        }
      ),
      builder.addCase(
        thunks.changeStatus.rejected,
        (state: ITaskState, action: PayloadAction<any>) => {
          toast.error(`Task editing failed`);
          state.loading_report = false;
          state.error_report = action.payload.error;
        }
      );
  }
});
export const { reducer } = taskSlice;
const Actions = { ...taskSlice.actions, ...thunks };
export default Actions;
