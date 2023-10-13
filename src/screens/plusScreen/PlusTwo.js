import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PlusTwo = () => {
  return (
    <View style={styles.container}>
      <Text>Plus Two</Text>
    </View>
  );
};

export default PlusTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
