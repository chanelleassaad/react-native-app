import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainNavigatorStackParamList} from '../navigation/MainNavigator.types';
import TaskList from '../components/organisms/TaskList';
import DetailsScreenStyle from '../styles/DetailsScreen.style';

const DetailsScreen = () => {
  const {params} =
    useRoute<RouteProp<MainNavigatorStackParamList, 'Details'>>();
  const {myAppTitle} = params ?? {};

  return (
    <ScrollView>
      <View style={DetailsScreenStyle.container}>
        <Text>{myAppTitle}</Text>
        <TaskList />
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
