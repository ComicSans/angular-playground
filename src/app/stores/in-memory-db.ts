import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryTaskService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1, name: 'Task 1' },
      { id: 2, name: 'Task 2' },
      { id: 3, name: 'Task 3' },
      { id: 4, name: 'Task 4' }
    ];
    return {tasks};
  }
}
