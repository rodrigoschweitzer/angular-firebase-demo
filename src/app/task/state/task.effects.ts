import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap, take, takeUntil } from 'rxjs/operators';

import { TaskService } from '../task.service';
import * as taskActions from './task.actions';

@Injectable()
export class TaskEffects {

    @Effect()
    createTask$ = this.actions$.pipe(
        ofType(taskActions.TaskActionTypes.CreateTask),
        map((action: taskActions.CreateTask) => action.payload),
        switchMap(task => {
            return from(this.taskService.save(task)).pipe(
                takeUntil(this.actions$.pipe(ofType(taskActions.TaskActionTypes.TaskPageDestroyed))),
                map(task => new taskActions.CreateTaskSuccess(task)),
                catchError(error => of(new taskActions.CreateTaskFail(error)))
            )
        })
    );

    @Effect()
    deleteTask$ = this.actions$.pipe(
        ofType(taskActions.TaskActionTypes.DeleteTask),
        map((action: taskActions.DeleteTask) => action.payload),
        switchMap(id => {
            return from(this.taskService.delete(id)).pipe(
                takeUntil(this.actions$.pipe(ofType(taskActions.TaskActionTypes.TaskPageDestroyed))),
                map(() => new taskActions.DeleteTaskSuccess(id)),
                catchError(error => of(new taskActions.DeleteTaskFail(error)))
            )
        })
    );

    @Effect()
    updateTask$ = this.actions$.pipe(
        ofType(taskActions.TaskActionTypes.UpdateTask),
        map((action: taskActions.UpdateTask) => action.payload),
        switchMap(task => {
            return from(this.taskService.update(task)).pipe(
                takeUntil(this.actions$.pipe(ofType(taskActions.TaskActionTypes.TaskPageDestroyed))),
                map(task => new taskActions.UpdateTaskSuccess(task)),
                catchError(error => of(new taskActions.UpdateTaskFail(error)))
            )
        })
    );

    @Effect()
    loadTasks$ = this.actions$.pipe(
        ofType(taskActions.TaskActionTypes.LoadTasks),
        switchMap(() => {
            return this.taskService.list(ref => ref.orderBy('createdAt', 'desc')).pipe(
                // takeUntil(this.actions$.pipe(ofType(taskActions.TaskActionTypes.TaskPageDestroyed))),
                take(1),
                map(tasks => new taskActions.LoadTasksSuccess(tasks)),
                catchError(error => of(new taskActions.LoadTasksFail(error)))
            )
        })
    );

    constructor(
        private actions$: Actions,
        private taskService: TaskService) { }

}
