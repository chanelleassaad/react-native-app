import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export default StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.darkBlue,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  buttonDark: {
    backgroundColor: 'white',
  },
  disabledButton: {
    backgroundColor: '#C1C1C1',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonTextDark: {
    color: colors.darkBlue,
  },
});
