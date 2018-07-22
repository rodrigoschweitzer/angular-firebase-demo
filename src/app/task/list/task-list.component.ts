import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { Task, Tasks } from '../task.model';

@Component({
  selector: 'afd-task-list',
  templateUrl: './task-list.component.html',
  styles: [`
    .completed {
      text-decoration: line-through;
      opacity: 0.6;
    }
  `]
})
export class TaskListComponent {

  @Input()
  title: string;

  @Input()
  hideMessage: boolean = false;

  @Input()
  tasks: Tasks = [];

  @Output('delete')
  private deleteTaskEventEmitter: EventEmitter<Task> = new EventEmitter();

  @Output('completed')
  private completedTaskEventEmitter: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  completed(event: MatCheckboxChange, task: Task) {
    this.completedTaskEventEmitter.emit({ ...task, completed: event.checked });
  }

  delete(task: Task) {
    this.deleteTaskEventEmitter.emit(task);
  }

  trackById(index: number, task: Task) {
    return task ? task.id : index;
  }

}
