import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {UserLoogedOut} from '../../featured/auth/authSlice';
const SettingDrawer = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>SettingDrawer</Text>
      <Button title="Logout" onPress={() => dispatch(UserLoogedOut(false))} />
    </View>
  );
};

export default SettingDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
