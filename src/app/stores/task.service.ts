import {Injectable} from '@angular/core';
import {Task} from './model-interfaces';
import {Observable, BehaviorSubject} from 'rxjs';
import {LOAD, ADD, EDIT, REMOVE, TaskStore} from './index';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/internal/operators';

const BASE_URL = `/api/tasks/`;

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks$: Observable<Task[]>;
  tasksChanged = new BehaviorSubject({});

  constructor(private http: HttpClient, private taskStore: TaskStore) {
    this.tasks$ = taskStore.items$;
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

