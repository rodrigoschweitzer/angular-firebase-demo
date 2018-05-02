import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from '../task.model';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'afd-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {

  @Input()
  tasks: Task[] = [];

  @Output('delete')
  private deleteTaskEventEmitter: EventEmitter<Task> = new EventEmitter();

  @Output('done')
  private doneTaskEventEmitter: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  done(event: MatCheckboxChange, task: Task) {
    this.doneTaskEventEmitter.emit({ ...task, done: event.checked });
  }

  delete(task: Task) {
    this.deleteTaskEventEmitter.emit(task);
  }

  trackById(index: number, task: Task) {
    return task ? task.id : index;
}

}
