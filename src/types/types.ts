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
  deleteTaskInPlace: (taskId: string) => void;
}

export interface EndDayProps extends Props {
  updateTaskList: (newTaskList: Task[]) => void;
  deleteTask: (taskId: string) => void;
}

export interface DailyCompletion {
  date: Date;
  completionPercentage: number;
}

export interface CompletionGraphProps {
  year: number;
  existingCompletions: DailyCompletion[];
}
