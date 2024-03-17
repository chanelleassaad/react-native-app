import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigatorStackParamList} from './MainNavigator.types';
import {StyleSheet} from 'react-native';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const MainStackNavigator =
  createNativeStackNavigator<MainNavigatorStackParamList>();

const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={styles}>
      <MainStackNavigator.Screen name="Home" component={HomeScreen} />
      <MainStackNavigator.Screen name="Details" component={DetailsScreen} />
      <MainStackNavigator.Screen name="Settings" component={SettingsScreen} />
    </MainStackNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#176B87',
  },
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  headerTintColor: 'white',
});

export default MainNavigator;
