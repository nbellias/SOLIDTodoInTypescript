import { Service } from 'typedi';

@Service()
export class Logger {
  log(message: string): void {
    console.log(`[INFO] ${message}`);
  }

  error(message: string): void {
    console.error(`[ERROR] ${message}`);
  }
}
