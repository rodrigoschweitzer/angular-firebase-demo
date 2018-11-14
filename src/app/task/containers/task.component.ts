import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import * as fromTasks from '../state';
import * as taskActions from '../state/task.actions';
import { Task, Tasks } from '../task.model';

@Component({
  selector: 'afd-task',
  templateUrl: './task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnInit, OnDestroy {

  tasks$: Observable<Tasks>;

  constructor(
    private dialogService: TdDialogService,
    private store: Store<fromTasks.State>) { }

  ngOnInit() {
    this.tasks$ = this.store.pipe(select(fromTasks.getTasks));

    this.store.dispatch(new taskActions.LoadTasks());
  }

  ngOnDestroy() {
    this.store.dispatch(new taskActions.TaskPageDestroyed());
  }

  add(title: string) {
    this.store.dispatch(new taskActions.CreateTask({ title, completed: false, createdAt: new Date(), finishedAt: null }));
  }

  completed(task: Task) {
    const finishedAt = task.completed ? new Date() : null;
    this.store.dispatch(new taskActions.UpdateTask({ ...task, finishedAt }));
  }

  showConfirmDelete(task: Task) {
    const confirmDialog = this.dialogService.openConfirm({
      message: `Do you want delete the task '${task.title}'?`,
      title: 'Delete task?',
      cancelButton: 'Cancel',
      acceptButton: 'Delete'
    });

    confirmDialog.beforeClose()
      .pipe(take(1))
      .subscribe(answer => {
        if (answer) this.delete(task.id);
      });
  }

  private delete(id: string) {
    this.store.dispatch(new taskActions.DeleteTask(id));
  }

}
