import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {UserLoogedIn} from '../../featured/auth/authSlice';

const Login = () => {
  const navigation = useNavigation();

  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  console.log(user);

  //   Register screen handler

  const GoregisterScreenHandler = () => {
    navigation.navigate('Register');
  };

  //   forgotpassword screen handler

  const GoforgotPasswordScreenHandler = () => {
    navigation.navigate('ForgotPassword');
  };

  //   User Login Handler action

  const loginHandler = () => {
    dispatch(UserLoogedIn(true));
  };

  return (
    <View style={styles.container}>
      <View
        style={{width: '100%', padding: 10, flexDirection: 'column', gap: 20}}>
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
          onPress={loginHandler}
          style={{
            backgroundColor: '#fd79a8',
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 5,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Text onPress={GoforgotPasswordScreenHandler}>forgot Password ?</Text>
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <Text onPress={GoregisterScreenHandler}>Don't have an account ?</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
