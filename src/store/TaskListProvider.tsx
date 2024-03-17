import React, {createContext, useContext, useReducer} from 'react';
import taskReducer from './taskReducer';

const TaskListContext = createContext();

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
