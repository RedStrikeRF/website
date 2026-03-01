export type TodoTask = {
  id: number;
  taskName: string;
  taskDescription: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export type TodoList = TodoTask[];

export type TodoAddTaskAction = {
  taskName: string;
  taskDescription: string;
}

export type TodoDeleteTaskAction = {
  id: number;
}

export type TodoEditTaskAction = {
  id: number;
  taskName?: string;
  taskDescription?: string;
}

export type TodoToggleTaskAction = {
  id: number;
}