import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CustomTabBarButton = props => {
  const {route, children, accessibilityState, onPress} = props;

  return (
    <TouchableOpacity style={styles.PlusContainerBtn} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;

const styles = StyleSheet.create({
  PlusContainerBtn: {
    flex: 1,
    justifyContent: 'center',
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    width: 60,
    height: 60,
  },
});
