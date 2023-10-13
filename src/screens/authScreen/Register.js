import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  //   Register screen handler

  const GologinScreenHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View
        style={{width: '100%', padding: 10, flexDirection: 'column', gap: 20}}>
        <TextInput
          placeholder="Name"
          style={{
            width: '100%',
            borderColor: '#fd79a8',
            borderWidth: 1,
            padding: 5,
          }}
        />
        <TextInput
          placeholder="Email"
          style={{
            width: '100%',
            borderColor: '#fd79a8',
            borderWidth: 1,
            padding: 5,
          }}
        />
        <TextInput
          placeholder="Password"
          style={{
            width: '100%',
            borderColor: '#fd79a8',
            borderWidth: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#fd79a8',
            padding: 8,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Singup</Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <Text onPress={GologinScreenHandler}>already have an account ?</Text>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
