// src/services/TodoService.ts
import { ITodoService } from "../interfaces/ITodoService";
import { Todo } from "../models/Todo";
import { Service } from "typedi";

@Service()
export class TodoService implements ITodoService {
  private todos: Todo[] = [];

  createTodo(title: string): Todo {
    const todo = new Todo(title);
    this.todos.push(todo);
    return todo;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  markAsDone(todo: Todo): void {
    todo.done = true;
  }

  markAsUndone(todo: Todo): void {
    todo.done = false;
  }
}
