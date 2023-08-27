// src/utils/ConsolePrinter.ts
import chalk from "chalk";

export class ConsolePrinter {
  static printMessage(message: string, color: chalk.Chalk = chalk.white): void {
    console.log(color(message));
  }
}
