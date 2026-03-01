import React from "react";
import { TodoTask } from "../model";

interface TaskCardProps {
  task: TodoTask;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div>
      <div >
        <h3>{task.taskName}</h3>
        <p >{task.taskDescription}</p>
        <small >
          Создано: {task.createdAt.toLocaleDateString()}
          {task.updatedAt && ` (изменено: ${task.updatedAt.toLocaleDateString()})`}
        </small>
      </div>
    </div>
  );
}