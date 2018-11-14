import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../state/app.state';
import { TaskState } from './task.reducer';

export interface State extends fromRoot.State {
    tasks: TaskState
}

const getTaskFeatureState = createFeatureSelector<TaskState>('tasks');

export const getTasks = createSelector(getTaskFeatureState, state => state.tasks);
