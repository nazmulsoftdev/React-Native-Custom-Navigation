import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileDrawer = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileDrawer</Text>
    </View>
  );
};

export default ProfileDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
