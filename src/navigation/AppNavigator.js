import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {navigationRef} from './NavigationService';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';

import Splash from '../screens/Splash';
import ProductDetail from '../screens/ProductDetail';
import CheckOut from '../screens/CheckOut';

/* ============================================================
   ROOT STACK
   Splash -> Auth (AuthStack) -> Main (TabNavigator)
   ProductDetail and CheckOut open on top of the tabs.
   ============================================================ */

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
