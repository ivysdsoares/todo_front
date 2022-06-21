interface ITask {
  id: number;
  title: string;
  description: string;
  expiration_date: string;
  color: number;
}

interface ICardProps {
  onCancel: (id: number) => void;
  onConfirm: (id: number) => void;
  loading: boolean;
  active: boolean;
}

type ITaskCardProps = ITask & ICardProps;

export type { ITask, ITaskCardProps };
