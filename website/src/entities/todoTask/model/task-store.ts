import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  TodoAddTaskAction,
  TodoDeleteTaskAction,
  TodoEditTaskAction,
  TodoList,
  TodoTask, TodoToggleTaskAction
} from "@entities/todoTask/model/types.ts";

const initialState: TodoList = [
  {
    id: Date.now(),
    taskName: "test1",
    taskDescription: "test2",
    completed: false,
    createdAt: new Date(),
  }
]

export const taskReducer = createSlice({
  name: 'ToDoList',
  initialState: initialState,
  reducers: {
    createTask: (state: TodoList, action: PayloadAction<TodoAddTaskAction>) => {
      {
        const newTask: TodoTask = {
          id: Date.now(),
          taskName: action.payload.taskName,
          taskDescription: action.payload.taskDescription,
          completed: false,
          createdAt: new Date()
        };
        state.push(newTask);
      }
    },
    editTask: (state: TodoList, action: PayloadAction<TodoEditTaskAction>) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        if (action.payload.taskName !== undefined) {
          task.taskName = action.payload.taskName;
        }
        if (action.payload.taskDescription !== undefined) {
          task.taskDescription = action.payload.taskDescription;
        }
        if (action.payload.taskName !== undefined ||
          action.payload.taskDescription !== undefined
        ) {
          task.updatedAt = new Date();
        }
      }
    },
    deleteTask: (state: TodoList, action: PayloadAction<TodoDeleteTaskAction>) => {
      return state.filter(task => task.id !== action.payload.id);
    },
    toggleTask: (state: TodoList, action: PayloadAction<TodoToggleTaskAction>) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
        task.updatedAt = new Date();
      }
    },
  }
})

export const { createTask, editTask, deleteTask, toggleTask } = taskReducer.actions;