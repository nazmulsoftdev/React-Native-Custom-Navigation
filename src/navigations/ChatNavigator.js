import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../screens/homeScreen/Chat';
import ChatMessage from '../screens/homeScreen/ChatMessage';

const Stack = createNativeStackNavigator();

const ChatNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Chat">
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatMessage" component={ChatMessage} />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
