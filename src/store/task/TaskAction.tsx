import {TaskInterface} from '../../interfaces/TaskInterface';

export type TaskAction =
  | {type: 'ADD_TASK'; payload: TaskInterface}
  | {type: 'TOGGLE_TASK'; payload: TaskInterface}
  | {type: 'REMOVE_TASK'; payload: TaskInterface};
