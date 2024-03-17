const initialState: {tasks: Task[]} = {
  tasks: [],
};

const taskReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {...state, tasks: [...state.tasks, action.payload]};
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? {...task, completed: !task.completed}
            : task,
        ),
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default taskReducer;
