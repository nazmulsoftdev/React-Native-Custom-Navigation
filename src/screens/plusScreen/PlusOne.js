import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PlusOne = () => {
  return (
    <View style={styles.container}>
      <Text>Plus One</Text>
    </View>
  );
};

export default PlusOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
