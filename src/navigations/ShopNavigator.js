import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Shop from '../screens/homeScreen/Shop';
import ShopDetails from '../screens/homeScreen/ShopDetails';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Shop">
      <Stack.Screen name="Shop" component={Shop} />
      <Stack.Screen name="ShopDetails" component={ShopDetails} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
