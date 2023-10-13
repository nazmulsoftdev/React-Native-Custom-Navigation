import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ChatMessage = () => {
  return (
    <View style={styles.container}>
      <Text>ChatMessage</Text>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
