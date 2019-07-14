import {Injectable, Injector} from '@angular/core';
import {Task} from './model-interfaces';
import {Observable, BehaviorSubject} from 'rxjs';
import {LOAD, ADD, EDIT, REMOVE, TaskStore} from './index';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/internal/operators';

import {InMemoryDbService} from 'angular-in-memory-web-api';

const BASE_URL = `/api/tasks/`;

@Injectable({
  providedIn: 'root'
})
export class TaskService implements InMemoryDbService {
  http: HttpClient;
  tasks$: Observable<Task[]>;
  tasksChanged = new BehaviorSubject({});

  constructor(private inject: Injector, private taskStore: TaskStore) {
    this.tasks$ = taskStore.items$;
    // little workaround for angular-in-memory-web-api cyclic dependencies
    setTimeout(() => {
      this.http = this.inject.get(HttpClient);
    });
  }

  createDb() {
    this.http = this.inject.get(HttpClient);
    const tasks = [
      { id: 1, name: 'Task 1' },
      { id: 2, name: 'Task 2' },
      { id: 3, name: 'Task 3' },
      { id: 4, name: 'Task 4' }
    ];
    return {tasks};
  }

  findTasks() {
    this.http = this.inject.get(HttpClient);
    this.http.get(BASE_URL, {params: {} }).pipe(
      tap((tasks) => {
        this.taskStore.dispatch({type: LOAD, data: tasks});
      })).subscribe();

    return this.tasks$;
  }
  getTask(id: number | string): Observable<Task> {
      return this.http.get<Task>(BASE_URL + id);
  }

  saveTask(task: Task) {
    const method = task.id ? 'PUT' : 'POST';
    return this.http.request(method, BASE_URL + (task.id || ''), {
      body: task
    }).pipe(
      tap(savedTask => {
        this.tasksChanged.next(savedTask);
        const actionType = task.id ? EDIT : ADD;
        const action = {type : actionType, data: savedTask};
        this.taskStore.dispatch(action);
      }));
  }
  deleteTask(task: Task) {
    return this.http.delete(BASE_URL + task.id).pipe(
      tap(_ => {
        this.taskStore.dispatch({type: REMOVE, data: task});
      }));
  }
}

