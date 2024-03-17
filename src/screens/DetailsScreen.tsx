import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainNavigatorStackParamList} from '../navigation/MainNavigator.types';
import TaskList from '../components/organisms/TaskList';

const DetailsScreen = () => {
  const {params} =
    useRoute<RouteProp<MainNavigatorStackParamList, 'Details'>>();
  const {myAppTitle} = params ?? {};

  return (
    <View style={styles.container}>
      <Text>{myAppTitle}</Text>
      <TaskList />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
