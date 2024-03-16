import {View, TextInput} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainNavigatorStackParamList} from '../navigation/MainNavigator.types';

const DetailsScreen = () => {
  const {params} =
    useRoute<RouteProp<MainNavigatorStackParamList, 'Details'>>();
  const {myAppTitle} = params ?? {};
  return (
    <View>
      <TextInput value={myAppTitle} />
    </View>
  );
};

export default DetailsScreen;
