import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Dimensions.get('window').width * 0.03,
  },
  title: {
    fontSize: PixelRatio.getFontScale() * 24,
    fontWeight: 'bold',
    marginVertical: Dimensions.get('window').height * 0.01,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  switchLabel: {
    fontSize: PixelRatio.getFontScale() * 18,
  },
});
