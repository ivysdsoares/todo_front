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
  ITaskStatusReturn
} from "./types";

const initialState: ITaskState = {
  // Active
  error_active: false,
  loading_active: true,
  active_tasks: [],
  filtered_active: [],
  filter_params_active: "",
  // Inactive
  error_inactive: false,
  loading_inactive: true,
  inactive_tasks: [],
  filtered_inactive: [],
  filter_params_inactive: "",
  // DashBoard
  loading_notify: false,
  // Report
  error_report: false,
  loading_report: true,
  report_task: null,
  // Create - Edit

  alt_error: false,
  alt_loading: true,
  alt_submit_error: false,
  alt_submit_loading: false,
  alt_task: null,
  alt_navigate:false
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    cleanUp: (state: ITaskState, action: PayloadAction<undefined>) => {
      Object.assign(state, initialState);
    },
    filterActive: (state: ITaskState, action: PayloadAction<string>) => {
      state.filter_params_active = action.payload;
      state.filtered_active = state.active_tasks.filter(
        (a) =>
          a.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          a.description.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterInactive: (state: ITaskState, action: PayloadAction<string>) => {
      state.filter_params_inactive = action.payload;
      state.filtered_inactive = state.inactive_tasks.filter(
        (a) =>
          a.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          a.description.toLowerCase().includes(action.payload.toLowerCase())
      );
    }
  },
  extraReducers: (builder) => {
    // GET ACTIVE --BEGIN
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
    // GET ACTIVE --END
    // GET INACTIVE --BEGIN
    builder.addCase(thunks.getInactive.pending, (state: ITaskState, action) => {
      state.loading_inactive = true;
    }),
      builder.addCase(
        thunks.getInactive.fulfilled,
        (state: ITaskState, action: PayloadAction<Array<ITask>>) => {
          state.loading_inactive = false;
          state.inactive_tasks = action.payload;
          state.filtered_inactive = action.payload;
        }
      ),
      builder.addCase(
        thunks.getInactive.rejected,
        (state: ITaskState, action: PayloadAction<any>) => {
          state.loading_inactive = false;
          state.error_inactive = action.payload.error;
        }
      );
    // GET INACTIVE --END
    // GET REPORT --BEGIN
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
    // GET REPORT --END
    // CHANGE STATUS --BEGIN
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

          const new_inactive: Array<ITask> = [
            ...state.inactive_tasks,
            ...state.active_tasks.filter((i) => i.id === action.payload.id)
          ];

          state.inactive_tasks = new_inactive;

          state.filtered_inactive = new_inactive.filter(
            (a) =>
              a.title
                .toLowerCase()
                .includes(state.filter_params_inactive.toLowerCase()) ||
              a.description
                .toLowerCase()
                .includes(state.filter_params_inactive.toLowerCase())
          );

          state.active_tasks = state.active_tasks.filter(
            (item) => item.id !== action.payload.id
          );

          state.filtered_active = state.filtered_active.map((item) => {
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
    // CHANGE STATUS --END
    // DETAIL --BEGIN
    builder.addCase(thunks.detail.pending, (state: ITaskState, action) => {
      state.alt_loading = true;
    }),
      builder.addCase(
        thunks.detail.fulfilled,
        (state: ITaskState, action: PayloadAction<ITask>) => {
          state.alt_loading = false;
          state.alt_task = action.payload;
        }
      ),
      builder.addCase(
        thunks.detail.rejected,
        (state: ITaskState, action: PayloadAction<any>) => {
          state.alt_loading = false;
          state.alt_error = action.payload.error;
        }
      );
    // DETAIL --END
    // CREATE --BEGIN
    builder.addCase(thunks.create.pending, (state: ITaskState, action) => {
      state.alt_loading = true;
    }),
      builder.addCase(
        thunks.create.fulfilled,
        (state: ITaskState, action: PayloadAction<{ id: number }>) => {
          state.alt_loading = false;
          toast.success("Task has been created", {
            onClose: () => {
              state.alt_navigate=true
            }
          });
        }
      ),
      builder.addCase(
        thunks.create.rejected,
        (state: ITaskState, action: PayloadAction<any>) => {
          state.alt_loading = false;
          state.alt_error = action.payload.error;
        }
      );
    // CREATE --END
    // EDIT --BEGIN
    builder.addCase(thunks.edit.pending, (state: ITaskState, action) => {
      state.alt_submit_loading= true;
    }),
      builder.addCase(
        thunks.edit.fulfilled,
        (state: ITaskState, action: PayloadAction<{ id: number }>) => {
          state.alt_submit_loading = false;
          state.alt_navigate=true
          toast.success("Task has been created");
        }
      ),
      builder.addCase(
        thunks.edit.rejected,
        (state: ITaskState, action: PayloadAction<any>) => {
          state.alt_submit_loading = false;
          state.alt_submit_error = action.payload.error;
        }
      );
    // CREATE --END
  }
});
export const { reducer } = taskSlice;
const Actions = { ...taskSlice.actions, ...thunks };
export default Actions;
