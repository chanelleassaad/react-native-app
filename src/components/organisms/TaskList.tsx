import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import CustomButton from '../atoms/CustomButton';
import TextEditor from '../atoms/TextEditor';
import {useTaskList} from '../../store/task/TaskListProvider';
import {TaskInterface} from '../../interfaces/TaskInterface';
import TaskListStyle from './TaskList.style';

const TaskList = () => {
  const {state, dispatch} = useTaskList();
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.trim() === '') {
      return;
    }
    dispatch({
      type: 'ADD_TASK',
      payload: {id: Date.now(), text: newTaskText, completed: false},
    });
    setNewTaskText('');
  };

  const toggleTask = (task: TaskInterface) => {
    dispatch({type: 'TOGGLE_TASK', payload: task});
  };

  const removeTask = (task: TaskInterface) => {
    dispatch({type: 'REMOVE_TASK', payload: task});
  };

  return (
    <View>
      <TextEditor
        title={'TO DO'}
        value={newTaskText}
        onChangeText={setNewTaskText}
        placeholder={'Enter task..'}
      />
      <CustomButton title="Add Task" onPress={addTask} />
      <FlatList
        data={state.tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={TaskListStyle.taskList}>
            <Text
              style={
                item.completed
                  ? TaskListStyle.completedTask
                  : TaskListStyle.task
              }>
              {item.text}
            </Text>
            <View style={TaskListStyle.editButtons}>
              <CustomButton
                title={item.completed ? 'Undo' : 'Done'}
                onPress={() => toggleTask(item)}
              />
              <CustomButton title="Remove" onPress={() => removeTask(item)} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TaskList;
