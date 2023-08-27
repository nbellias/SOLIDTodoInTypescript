import 'reflect-metadata';
import { Service } from 'typedi';

@Service()
export class Logger {
  log(message: string): void {
    console.log(message);
  }
}
