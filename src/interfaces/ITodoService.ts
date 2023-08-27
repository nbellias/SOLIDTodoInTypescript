// src/interfaces/ITodoService.ts
import { Todo } from "../models/Todo";

export interface ITodoService {
  createTodo(title: string): Todo;
  getTodos(): Todo[];
  markAsDone(todo: Todo): void;
  markAsUndone(todo: Todo): void;
}
