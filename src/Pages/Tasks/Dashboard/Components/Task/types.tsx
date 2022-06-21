interface ITask {
  id: number;
  title: string;
  description: string;
  expiration_date: string;
  color: number;
  status: string;
}

interface ICardProps {
  onCancel: (task: ITask) => void;
  onConfirm: (task: ITask) => void;
  active: boolean;
  status: string;
}

type ITaskCardProps = ITask & ICardProps;

export type { ITask, ITaskCardProps };
