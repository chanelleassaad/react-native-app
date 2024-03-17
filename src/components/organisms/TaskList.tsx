import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../atoms/CustomButton';
import TextEditor from '../atoms/TextEditor';
import {useTaskList} from '../../store/TaskListProvider';

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

  const toggleTask = (task: Task) => {
    dispatch({type: 'TOGGLE_TASK', payload: task});
  };

  const removeTask = (task: Task) => {
    dispatch({type: 'REMOVE_TASK', payload: task});
  };

  return (
    <View>
      <Text>Tasks To Do</Text>
      <TextEditor
        value={newTaskText}
        onChangeText={setNewTaskText}
        placeholder={'Enter task..'}
      />
      <CustomButton title="Add Task" onPress={addTask} />
      <FlatList
        data={state.tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.taskList}>
            <Text
              style={{
                textDecorationLine: item.completed ? 'line-through' : 'none',
              }}>
              {item.text}
            </Text>
            <View style={styles.editButtons}>
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

const styles = StyleSheet.create({
  taskList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  editButtons: {flexDirection: 'row'},
});
