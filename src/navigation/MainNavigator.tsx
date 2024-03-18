import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigatorStackParamList} from './MainNavigator.types';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MainNavigatorStyle from './MainNavigator.style';

const MainStackNavigator =
  createNativeStackNavigator<MainNavigatorStackParamList>();

const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={MainNavigatorStyle}>
      <MainStackNavigator.Screen name="Home" component={HomeScreen} />
      <MainStackNavigator.Screen name="Details" component={DetailsScreen} />
      <MainStackNavigator.Screen name="Settings" component={SettingsScreen} />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;
