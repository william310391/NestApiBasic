import { Injectable } from '@nestjs/common';
import { CraeteTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
  id: number;
  name: string;
  phone: string;
}


@Injectable()
export class TasksService {
  private tasks = [];

  getAllTask() {
    return this.tasks;
  }

  getTask(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(task: CraeteTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task:UpdateTaskDto) {
    console.log(task.title,task.description)
    return 'actualizar tarea';
  }

  deleteTask() {
    return 'eliminar tarea';
  }

  updateTaskStatus() {
    return 'actualizar el estado de una tarea';
  }
}
