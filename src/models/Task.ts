import { ITask } from '../interfaces/ITask';

export class Task implements ITask {
  constructor(public id: string, public title: string, public completed: boolean) {}
}
