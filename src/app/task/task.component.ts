import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Observable } from 'rxjs';

import { Task, Tasks } from './task.model';
import { TaskService } from './task.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'afd-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {

  tasks$: Observable<Tasks>;

  private alive: boolean = true;

  constructor(
    private dialogService: TdDialogService,
    private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
  }

  add(title: string) {
    this.taskService.add({ title, completed: false, createdAt: new Date(), finishedAt: null });
  }

  completed(task: Task) {
    const finishedAt = task.completed ? new Date() : null;
    this.taskService.update({ ...task, finishedAt });
  }

  showConfirmDelete(task: Task) {
    const confirmDialog = this.dialogService.openConfirm({
      message: `Do you want delete the task '${task.title}'?`,
      title: 'Delete task?',
      cancelButton: 'Cancel',
      acceptButton: 'Delete'
    });

    confirmDialog.beforeClose()
      .pipe(takeWhile(() => this.alive))
      .subscribe(answer => {
        if (answer) this.delete(task);
      });
  }

  private delete(task: Task) {
    this.taskService.delete(task);
  }

  private loadTasks() {
    this.tasks$ = this.taskService.list(ref => ref.orderBy('createdAt', 'desc'));
  }

}
