import { Tasks } from '../task.model';
import { TaskActions, TaskActionTypes } from './task.actions';

export interface TaskState {
    tasks: Tasks;
}

const initialState: TaskState = {
    tasks: []
}

export function reducer(state = initialState, action: TaskActions): TaskState {
    switch (action.type) {
        case TaskActionTypes.CreateTaskSuccess:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            };

        case TaskActionTypes.CreateTaskFail:
            console.error('CreateTaskFail', action.payload);
            return { ...state };

        case TaskActionTypes.DeleteTaskSuccess:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };

        case TaskActionTypes.DeleteTaskFail:
            return state;

        case TaskActionTypes.UpdateTaskSuccess:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    return task.id === action.payload.id ? action.payload : task
                })
            };

        case TaskActionTypes.UpdateTaskFail:
            console.error('UpdateTaskFail', action.payload);
            return { ...state };

        case TaskActionTypes.LoadTasksSuccess:
            return { ...state, tasks: action.payload };

        case TaskActionTypes.LoadTasksFail:
            console.error('LoadTasksFail', action.payload);
            return { ...state, tasks: [] };

        default:
            return state;
    }
}
