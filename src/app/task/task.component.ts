import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { Observable } from 'rxjs';

import { Task } from './task.model';
import { TaskService } from './task.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'afd-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {

  tasks$: Observable<Task[]>;

  tasksCompleted$: Observable<Task[]>;

  private alive: boolean = true;

  constructor(
    private dialogService: TdDialogService,
    private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
    this.loadCompletedTasks();
  }

  add(title: string) {
    this.taskService.add({ title, completed: false, createdAt: new Date(), finishedAt: null });
  }

  completed(task: Task) {
    this.taskService.update(task);
  }

  showConfirmDelete(task: Task) {
    const confirmDialog = this.dialogService.openConfirm({
      message: `Do you want delete the task '${task.title}'?`,
      title: 'Confirm Delete',
      cancelButton: 'Cancel',
      acceptButton: 'Delete'
    });

    confirmDialog.beforeClose().pipe(takeWhile(() => this.alive))
      .subscribe(answer => {
        if (answer) this.delete(task);
      });
  }

  private delete(task: Task) {
    this.taskService.delete(task);
  }

  private loadTasks() {
    this.tasks$ = this.taskService.list(ref => ref.where('completed', '==', false).orderBy('createdAt', 'desc'));
  }

  private loadCompletedTasks() {
    this.tasksCompleted$ = this.taskService.list(ref => ref.where('completed', '==', true).orderBy('finishedAt', 'desc'));
  }

}
