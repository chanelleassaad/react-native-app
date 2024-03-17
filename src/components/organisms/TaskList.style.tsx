import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  taskList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  task: {
    flex: 1,
    fontSize: 16,
  },
  completedTask: {
    flex: 1,
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  editButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
