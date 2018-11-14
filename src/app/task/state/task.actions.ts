import { Action } from '@ngrx/store';

import { Task, Tasks } from '../task.model';

export enum TaskActionTypes {
    CreateTask = '[Task API] Create Task',
    CreateTaskSuccess = '[Task API] Create Task Success',
    CreateTaskFail = '[Task API] Create Task Fail',

    DeleteTask = '[Task API] Delete Task',
    DeleteTaskSuccess = '[Task API] Delete Task Success',
    DeleteTaskFail = '[Task API] Delete Task Fail',

    UpdateTask = '[Task API] Update Task',
    UpdateTaskSuccess = '[Task API] Update Task Success',
    UpdateTaskFail = '[Task API] Update Task Fail',

    LoadTasks = '[Task API] Load Tasks',
    LoadTasksSuccess = '[Task API] Load Tasks Success',
    LoadTasksFail = '[Task API] Load Tasks Fail',

    TaskPageDestroyed = '[Task UI] Task Page Destroyed'
}

export class CreateTask implements Action {
    readonly type = TaskActionTypes.CreateTask;

    constructor(public payload: Task) {}
}

export class CreateTaskSuccess implements Action {
    readonly type = TaskActionTypes.CreateTaskSuccess;

    constructor(public payload: Task) {}
}

export class CreateTaskFail implements Action {
    readonly type = TaskActionTypes.CreateTaskFail;

    constructor(public payload: string) {}
}

export class DeleteTask implements Action {
    readonly type = TaskActionTypes.DeleteTask;

    constructor(public payload: string) {}
}

export class DeleteTaskSuccess implements Action {
    readonly type = TaskActionTypes.DeleteTaskSuccess;

    constructor(public payload: string) {}
}

export class DeleteTaskFail implements Action {
    readonly type = TaskActionTypes.DeleteTaskFail;

    constructor(public payload: string) {}
}

export class UpdateTask implements Action {
    readonly type = TaskActionTypes.UpdateTask;

    constructor(public payload: Task) {}
}

export class UpdateTaskSuccess implements Action {
    readonly type = TaskActionTypes.UpdateTaskSuccess;

    constructor(public payload: Task) {}
}

export class UpdateTaskFail implements Action {
    readonly type = TaskActionTypes.UpdateTaskFail;

    constructor(public payload: string) {}
}

export class LoadTasks implements Action {
    readonly type = TaskActionTypes.LoadTasks;
}

export class LoadTasksSuccess implements Action {
    readonly type = TaskActionTypes.LoadTasksSuccess;

    constructor(public payload: Tasks) {}
}

export class LoadTasksFail implements Action {
    readonly type = TaskActionTypes.LoadTasksFail;

    constructor(public payload: string) {}
}

export class TaskPageDestroyed implements Action {
    readonly type = TaskActionTypes.TaskPageDestroyed;
}

export type TaskActions = CreateTask
    | CreateTaskSuccess
    | CreateTaskFail
    | DeleteTask
    | DeleteTaskSuccess
    | DeleteTaskFail
    | UpdateTask
    | UpdateTaskSuccess
    | UpdateTaskFail
    | LoadTasks
    | LoadTasksSuccess
    | LoadTasksFail
    | TaskPageDestroyed;
