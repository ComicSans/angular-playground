import {TestBed, inject, fakeAsync} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TaskService} from './task.service';
import {TaskStore} from './task.store';

describe('Task-Service', () => {
  let taskService: TaskService;
  let taskStore: TaskStore;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TaskService,
        TaskStore,
      ]
    });
    taskService = TestBed.get(TaskService);
    taskStore = TestBed.get(TaskStore);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  const saveTask = (task, expectedUrl = null, expectedMethod = null) => {
    taskService.saveTask(task).subscribe();
    const request = httpTestingController.expectOne({
      url: expectedUrl,
      method: expectedMethod
    });

    request.flush(task);
  };

  it('should add the Task to the store', (() => {
    const spy = spyOn(taskStore, 'dispatch').and.callThrough();
    saveTask({title: 'Task 1'});
    const dispatchedAction = spy.calls.mostRecent().args[0];
    expect(dispatchedAction.type).toEqual('ADD');
    expect(dispatchedAction.data.title).toEqual('Task 1');
  }));

  it('should save the Task in store', (() => {
    const spy = spyOn(taskStore, 'dispatch').and.callThrough();
    saveTask({id: 1, title: 'Task 1'});
    const dispatchedAction = spy.calls.mostRecent().args[0];
    expect(dispatchedAction.type).toEqual('EDIT');
    expect(dispatchedAction.data.title).toEqual('Task 1');
  }));

});
