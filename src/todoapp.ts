// src/totdoapp.ts
import "reflect-metadata";
import { Container } from "typedi";
import inquirer from "inquirer";
import chalk from "chalk";
import { ITodoService } from "./interfaces/ITodoService";
import { ConsolePrinter } from "./utils/ConsolePrinter";
import { TodoService } from "./services/TodoService";

async function main() {
  const container = Container;
  const todoService = container.get<ITodoService>(TodoService);

  while (true) {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: ["Add Todo", "View Todos", "Exit"],
      },
    ]);

    if (action === "Exit") {
      ConsolePrinter.printMessage("Goodbye!", chalk.green);
      break;
    }

    if (action === "Add Todo") {
      const { title } = await inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "Enter todo title:",
        },
      ]);
      const todo = todoService.createTodo(title);
      ConsolePrinter.printMessage(`Added todo: ${todo.title}`, chalk.cyan);
    }

    if (action === "View Todos") {
      const todos = todoService.getTodos();
      todos.forEach((todo) => {
        const status = todo.done ? chalk.green("Done") : chalk.red("Not Done");
        ConsolePrinter.printMessage(`${todo.title} - ${status}`);
      });
    }
  }
}

main();
