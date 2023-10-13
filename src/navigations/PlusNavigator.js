import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PlusOne from '../screens/plusScreen/PlusOne';
import PlusTwo from '../screens/plusScreen/PlusTwo';

const Stack = createNativeStackNavigator();

const PlusNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="PlusOne">
      <Stack.Screen name="PlusOne" component={PlusOne} />
      <Stack.Screen name="PlusTwo" component={PlusTwo} />
    </Stack.Navigator>
  );
};

export default PlusNavigator;
