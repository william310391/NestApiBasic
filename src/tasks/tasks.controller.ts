import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Query} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CraeteTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTask(@Query() query: any) {
    return this.tasksService.getAllTask();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    const taskFound = this.tasksService.getTask(parseInt(id));
    if (!taskFound) {
      return new NotFoundException(`Task with is ${id} not found`);
    }
    return taskFound;
  }

  @Post()
  createTask(@Body() task: CraeteTaskDto) {
    return this.tasksService.createTask(task);
  }
  @Put()
  updateTask(@Body() task:UpdateTaskDto) {
    return this.tasksService.updateTask(task);
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch()
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
