import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/homeScreen/Home';
import ChatNavigator from './ChatNavigator';
import ShopNavigator from './ShopNavigator';
import Cart from '../screens/homeScreen/Cart';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import ChatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShopIcon from 'react-native-vector-icons/AntDesign';
import CustomTabBarButton from '../components/CustomTabBarButton';
import PlusNavigator from './PlusNavigator';
import PlusIcon from 'react-native-vector-icons/Ionicons';
import OpenDrawerIcon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarCustomStyle,
        tabBarActiveTintColor: '#2c3e50',
        tabBarInactiveTintColor: '#74b9ff',
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return !focused ? (
              <HomeIcon name="home-outline" size={size} color={color} />
            ) : (
              <HomeIcon name="home" size={size} color={color} />
            );
          } else if (route.name === 'Chat_Navigator') {
            return !focused ? (
              <ChatIcon
                name="chat-processing-outline"
                size={size}
                color="#487eb0"
              />
            ) : (
              <ChatIcon name="chat-processing" size={size} color={color} />
            );
          } else if (route.name === 'Plus_Navigator') {
            return !focused ? (
              <PlusIcon name="add-circle-outline" size={50} color={'#2c3e50'} />
            ) : (
              <PlusIcon name="add-circle-sharp" size={50} color={'#2c3e50'} />
            );
          } else if (route.name === 'Shop_Navigator') {
            return !focused ? (
              <ShopIcon name="appstore-o" color={color} size={size} />
            ) : (
              <ShopIcon name="appstore1" color={color} size={size} />
            );
          } else if (route.name === 'Cart') {
            return !focused ? (
              <HomeIcon name="cart-outline" color={color} size={size} />
            ) : (
              <HomeIcon name="cart" color={color} size={size} />
            );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat_Navigator" component={ChatNavigator} />
      <Tab.Screen
        name="Plus_Navigator"
        component={PlusNavigator}
        options={{
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen name="Shop_Navigator" component={ShopNavigator} />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: true,
          title: '',
          headerStyle: {
            height: 50,
            elevation: 20,
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{marginRight: 10}}>
                <OpenDrawerIcon name="navicon" size={30} color="#00cec9" />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarCustomStyle: {
    position: 'absolute',
    backgroundColor: 'white',
    borderTopWidth: 0,
    height: 52,
    borderTopStartRadius: 10,
  },
});
