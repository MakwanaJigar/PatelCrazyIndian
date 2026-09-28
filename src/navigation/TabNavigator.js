import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';

/* ============================================================
   BOTTOM TABS
   Home (Menu) | Cart (Feast Tray) | Profile
   ============================================================ */

const Tab = createBottomTabNavigator();

const COLORS = {
  active: '#C90013',
  inactive: '#553833',
  border: '#F0DDD9',
};

// Black icons, re-coloured with tintColor for active / inactive.
const ICONS = {
  Home: 'https://img.icons8.com/ios-filled/100/000000/restaurant-menu.png',
  Cart: 'https://img.icons8.com/ios-filled/100/000000/shopping-bag.png',
  Profile: 'https://img.icons8.com/ios-filled/100/000000/user.png',
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.active,
        tabBarInactiveTintColor: COLORS.inactive,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({color}) => (
          <Image
            source={{uri: ICONS[route.name]}}
            style={[styles.tabIcon, {tintColor: color}]}
            resizeMode="contain"
          />
        ),
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: 'Menu'}}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{tabBarLabel: 'Feast Tray'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopColor: COLORS.border,
  },

  tabLabel: {
    fontSize: 11,
    fontWeight: '700',
  },

  tabIcon: {
    width: 22,
    height: 22,
  },
});
