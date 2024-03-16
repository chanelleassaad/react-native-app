import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainNavigatorAtackParamList = {
  Home: undefined;
  Details: undefined;
  Settings: undefined;
};

export type MainNavigatorNavigationProp =
  NativeStackNavigationProp<MainNavigatorAtackParamList>;

export type MainNavigatorRouteProp = RouteProp<MainNavigatorAtackParamList>;
