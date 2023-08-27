import 'reflect-metadata';
import { Container } from 'typedi';
import inquirer from 'inquirer';
import { TaskService } from './services/TaskService';
import { Logger } from './utils/Logger';

async function main() {
  const logger = Container.get(Logger);
  const taskService = Container.get(TaskService);

  while (true) {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: ['Add Task', 'List Tasks', 'Complete Task', 'Exit'],
      },
    ]);

    if (action === 'Exit') {
      break;
    }

    try {
      switch (action) {
        case 'Add Task':
          const { title } = await inquirer.prompt([
            {
              type: 'input',
              name: 'title',
              message: 'Enter task title:',
            },
          ]);
          taskService.createTask(title);
          logger.log('Task added!');
          break;

        case 'List Tasks':
          const tasks = taskService.getTasks();
          tasks.forEach(task => {
            const status = task.completed ? '✓' : ' ';
            console.log(`[${status}] ${task.title}`);
          });
          break;

        case 'Complete Task':
          const tasksToComplete = taskService.getTasks().filter(task => !task.completed);
          const { taskId } = await inquirer.prompt([
            {
              type: 'list',
              name: 'taskId',
              message: 'Choose a task to complete:',
              choices: tasksToComplete.map(task => ({ name: task.title, value: task.id })),
            },
          ]);
          taskService.completeTask(taskId);
          logger.log('Task completed!');
          break;
      }
    } catch (error) {
      logger.error(`An error occurred: ${error}`);
    }
  }
}

main().catch(error => console.error('An error occurred:', error));
