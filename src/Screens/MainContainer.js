import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from '../navigation/AppNavigator';
import AuthStack from '../navigation/AuthStack';

const MainContainer = () => {
  return (
    <AppNavigator/>
    // <AuthStack/>
  );
};

export default MainContainer;