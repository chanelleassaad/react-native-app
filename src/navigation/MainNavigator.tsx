import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigatorAtackParamList} from './MainNaviagtor.types';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const MainStackNavigator =
  createNativeStackNavigator<MainNavigatorAtackParamList>();

const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator initialRouteName="HomeScreen">
      <MainStackNavigator.Screen name="Home" component={HomeScreen} />
      <MainStackNavigator.Screen
        name="DetailsScreen"
        component={DetailsScreen}
      />
      <MainStackNavigator.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainNavigator;
