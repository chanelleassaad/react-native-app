import React, {createContext, useContext, useReducer} from 'react';
import taskReducer from './taskReducer';
import {TaskInterface} from '../../interfaces/TaskInterface';
import {TaskAction} from './TaskAction';

interface TaskContextType {
  state: {tasks: TaskInterface[]};
  dispatch: React.Dispatch<TaskAction>;
}

const TaskListContext = createContext<TaskContextType | undefined>(undefined);

const initialState = {
  tasks: [],
};

export const TaskListProvider = ({children}) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskListContext.Provider value={{state, dispatch}}>
      {children}
    </TaskListContext.Provider>
  );
};

export const useTaskList = () => {
  const context = useContext(TaskListContext);
  if (!context) {
    throw new Error('useTaskList must be used within a TaskListProvider');
  }
  return context;
};
