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
    // inactive
    error_inactive: false|string;
    loading_inactive: boolean;
    inactive_task:Array<ITask>;
    filtered_inactive:Array<ITask>;
    // dashboard
    loading_notify:number|false;
    // dashboard-request status{0 == HIDDEN|1 ==SUCCESS | 2 ==ERROR}
    notify: 0|1|2 
    // report   
    error_report: false|string;
    loading_report:boolean;
    report_task:IReportTask|null;
    // other pages
    alt_error:false|string;
    alt_loading:boolean;
    create_status:  ITask| 0 |1 ;
    edit_status: ITask| 0 | 1;

}

export interface ITaskPayload{
    id:number
}

export interface ITaskStatusReturn{
    id:number,
    status:string
}
