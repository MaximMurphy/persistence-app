export type Task = {
  id: string;
  name: string;
  isComplete: boolean;
  isPersistent: boolean;
};

export type InitialTaskProps = {
  initialTasks: Task[];
};

export type Props = {
  taskList: Task[];
};

export interface TaskSectionProps extends Props {
  updateTaskList: (newTaskList: Task[]) => void;
  deleteTask: (taskId: string) => void;
}
