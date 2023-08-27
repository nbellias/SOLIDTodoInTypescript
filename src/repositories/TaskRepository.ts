import { Service } from 'typedi';
import { Task } from '../models/Task';

@Service()
export class TaskRepository {
  private tasks: Task[] = [];

  createTask(title: string): Task {
    const task: Task = {
      id: String(this.tasks.length + 1),
      title,
      completed: false,
    };
    this.tasks.push(task);
    return task;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  completeTask(id: string): void {
    const task = this.getTaskById(id);
    if (task) {
      task.completed = true;
    }
  }
}
