import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileDrawer from '../screens/drawerScreen/ProfileDrawer';
import OrderDrawer from '../screens/drawerScreen/OrderDrawer';
import FavoriteDrawer from '../screens/drawerScreen/FavoriteDrawer';
import SettingDrawer from '../screens/drawerScreen/SettingDrawer';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import ProfileIcon from 'react-native-vector-icons/EvilIcons';
import OrderIcon from 'react-native-vector-icons/MaterialIcons';
import FavoriteIcon from 'react-native-vector-icons/MaterialIcons';
import SettingIcon from 'react-native-vector-icons/AntDesign';
import CustomDrawerComponent from '../components/CustomDrawerComponent';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Drawer_Home"
      drawerContent={props => <CustomDrawerComponent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        drawerActiveBackgroundColor: '#2c3e50',
        drawerActiveTintColor: '#ecf0f1',
        drawerPosition: 'left',
        drawerLabelStyle: {
          marginLeft: -15,
        },
      }}>
      <Drawer.Screen
        name="Drawer_Home"
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size, color}) => (
            <HomeIcon name="home-outline" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Drawer_Profile"
        component={ProfileDrawer}
        options={{
          title: 'Profile',
          drawerIcon: ({focused, size, color}) => (
            <ProfileIcon name="user" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Drawer_Order"
        component={OrderDrawer}
        options={{
          title: 'Order',
          drawerIcon: ({focused, size, color}) => (
            <OrderIcon name="pending-actions" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Drawer_Favorite"
        component={FavoriteDrawer}
        options={{
          title: 'Favorite',
          drawerIcon: ({focused, size, color}) => (
            <FavoriteIcon name="favorite-border" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Drawer_Setting"
        component={SettingDrawer}
        options={{
          title: 'Setting',
          drawerIcon: ({focused, size, color}) => (
            <SettingIcon name="setting" size={25} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
