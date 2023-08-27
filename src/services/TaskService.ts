import { Service } from 'typedi';
import { TaskRepository } from '../repositories/TaskRepository';
import { Task } from '../models/Task';

@Service()
export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  createTask(title: string): Task {
    return this.taskRepository.createTask(title);
  }

  getTasks(): Task[] {
    return this.taskRepository.getTasks();
  }

  completeTask(id: string): void {
    this.taskRepository.completeTask(id);
  }
}
