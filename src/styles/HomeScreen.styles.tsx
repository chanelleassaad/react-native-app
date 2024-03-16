import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#176B87',
    width: '100%',
    height: '100%',
    minHeight: '65%',
    minWidth: '100%',
  },
  routeButtons: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
  },
});
