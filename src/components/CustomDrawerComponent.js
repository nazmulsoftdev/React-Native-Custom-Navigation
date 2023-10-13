import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import DrawerBackImg from '../../assets/drawerbackImg.png';
import UserAvater from '../../assets/avater.png';

const {width} = Dimensions.get('screen');

const CustomDrawerComponent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={DrawerBackImg}
        style={{width: '100%', height: 180, position: 'relative'}}>
        <Image source={UserAvater} style={styles.AvaterBox} />
      </ImageBackground>
      <View style={styles.DrawerListContainer}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerComponent;

const styles = StyleSheet.create({
  AvaterBox: {
    width: 80,
    height: 80,
    borderRadius: 50,
    position: 'absolute',
    left: width / 2 - 110,
    top: 50,
    borderWidth: 4,
    borderWidth: 4,
  },
  DrawerListContainer: {
    marginTop: 30,
  },
});
