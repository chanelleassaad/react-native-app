import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.lightBlue, // Default background color
  },
  darkContainer: {
    backgroundColor: colors.darkBlue, // Dark mode background color
  },
  homeImage: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 30,
    padding: 10,
    color: 'white',
    fontStyle: 'italic',
  },
  darkTitle: {
    color: colors.lightBlue, // Dark mode text color
  },
  background: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    minHeight: '65%',
    minWidth: '100%',
  },
  darkBackground: {
    backgroundColor: colors.darkBlue, // Dark mode background color for inner content
  },
  routeButtons: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
  },
});
