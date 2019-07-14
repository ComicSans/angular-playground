import {Component, OnInit} from '@angular/core';
import {Task} from '../stores/model-interfaces';
import {TaskService} from '../stores/task.service';
import {Observable} from 'rxjs';
import {query} from '@angular/animations';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  selectedTaskId: string | number = null;
  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.findTasks();
    this.tasks$ = this.taskService.tasks$;
  }

  selectTask(taskId: string | number) {
    this.selectedTaskId = taskId;
    console.log('Selected Task', this.selectedTaskId);
  }

  deleteTask(task) {
    this.taskService.deleteTask(task).subscribe();
    console.log('Deleted Task', task.id);
  }
}
