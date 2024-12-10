export type Task = {
  id: string;
  name: string;
  isComplete: boolean;
  isPersistent: boolean;
};

export type Props = {
  taskList: Task[];
};

export interface TaskSectionProps extends Props {
  updateTaskList: (newTaskList: Task[]) => void;
}
