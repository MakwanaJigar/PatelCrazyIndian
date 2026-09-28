import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../auth/Login';
import Register from '../auth/Register';
import ForgotPassword from '../auth/ForgotPassword';
import OTP from '../auth/OTP';
import ResetPassword from '../auth/ResetPasswordScreen';

/* ============================================================
   AUTH STACK
   Login -> OTP -> (Main)
   Login -> Register -> OTP -> (Main)
   Login -> ForgotPassword -> OTP -> ResetPassword -> Login
   ============================================================ */

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
