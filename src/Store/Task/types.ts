export interface ITask {
    id:number;
    user_id:number;
    title:string;
    description:string;
    color:number;
    status:string;
    expiration_date:string;
}
export interface IReportTask{
  complete: number;
  ongoing: number;
  failed: number;
  expired: number;
}
export interface ITaskState{
    // active
    error_active: false|string;
    loading_active: boolean;
    active_tasks:Array<ITask>;
    filtered_active:Array<ITask>;
     filter_params_active:string;
    // inactive
    error_inactive: false|string;
    loading_inactive: boolean;
    inactive_tasks:Array<ITask>;
    filtered_inactive:Array<ITask>;
    filter_params_inactive:string;
    // dashboard
    loading_notify:number|false;
    // dashboard-request status{0 == HIDDEN|1 ==SUCCESS | 2 ==ERROR}
    // report   
    error_report: false|string;
    loading_report:boolean;
    report_task:IReportTask;
    // other pages
    alt_error:false|string;
    alt_loading:boolean;
    alt_submit_loading:boolean;
    alt_submit_error:boolean|string;
    alt_task:ITask|null;
    alt_navigate:boolean

}

export interface ITaskPayload{
    id:number
}

export interface ITaskStatusReturn{
    id:number,
    status:string
}
