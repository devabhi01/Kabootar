import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Calls from '../screens/Calls';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 0,
          elevation: 0,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },

        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#9CA3AF',
      }}
    >
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="Calls" component={Calls} />

      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
