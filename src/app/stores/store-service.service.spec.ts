import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('StoreServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
});
