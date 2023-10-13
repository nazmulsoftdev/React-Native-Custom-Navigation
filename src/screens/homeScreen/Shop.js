import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Shop = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Shop</Text>
      <Button
        title="Shop Details"
        onPress={() => navigation.navigate('ShopDetails')}
      />
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
