import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from '../task.model';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'afd-task-list',
  templateUrl: './task-list.component.html',
  styles: [`
    .completed {
      text-decoration: line-through;
      opacity: 0.6;
    }
    .empty-tasks {
      width: 100px;
      height: 100px;
      background: url('assets/images/empty_tasks.png') round;
    }
  `]
})
export class TaskListComponent {

  @Input()
  title: string;

  @Input()
  hideMessage: boolean = false;

  @Input()
  tasks: Task[] = [];

  @Output('delete')
  private deleteTaskEventEmitter: EventEmitter<Task> = new EventEmitter();

  @Output('completed')
  private completedTaskEventEmitter: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  completed(event: MatCheckboxChange, task: Task) {
    const finishedAt = event.checked ? new Date() : null;
    this.completedTaskEventEmitter.emit({ ...task, completed: event.checked, finishedAt });
  }

  delete(task: Task) {
    this.deleteTaskEventEmitter.emit(task);
  }

  trackById(index: number, task: Task) {
    return task ? task.id : index;
  }

}
