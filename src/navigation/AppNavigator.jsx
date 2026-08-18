import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Splash from '../screens/Splash';
import CallSetting from '../screens/Calls/CallSetting';
import OutgoingCall from '../screens/Calls/OutgoingCall';
import IncomingCall from '../screens/Calls/IncomingCall';
import CreateAccount from '../screens/CreateAccount';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/* Authentication  */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          headerShown: false,
        }}
      />

      {/* Calls Screen */}
      <Stack.Screen
        name="CallSetting"
        component={CallSetting}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="IncomingCall"
        component={IncomingCall}
        options={{
          headerShown: false,
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="OutgoingCall"
        component={OutgoingCall}
        options={{
          headerShown: false,
          animation: 'slide_from_bottom',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
