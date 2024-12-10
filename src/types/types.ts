export type Task = {
  id: string;
  name: string;
  isComplete: boolean;
};

export type Props = {
  taskList: Task[];
};
