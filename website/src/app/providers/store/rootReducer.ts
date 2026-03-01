import  { taskReducer }  from "@entities/todoTask/model";

export const rootReducer = {
  todoList: taskReducer.reducer,
}
