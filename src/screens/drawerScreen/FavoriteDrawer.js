import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FavoriteDrawer = () => {
  return (
    <View style={styles.container}>
      <Text>FavoriteDrawer</Text>
    </View>
  );
};

export default FavoriteDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
