import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chats from '../screens/Chats';
import Calls from '../screens/Calls';
import Updates from '../screens/Updates';
import Settings from '../screens/Settings';
import { Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          height: 56,
          paddingVertical: 8,
          borderTopWidth: 0,
          alignContent: 'center',
          elevation: 0,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },

        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarButton: props => (
          <TouchableOpacity {...props} activeOpacity={1} />
        ),
      }}
    >
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/chat.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? colors.primary : '#444654',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/update.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? colors.primary : '#444654',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/phone.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? colors.primary : '#444654',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/icons/setting.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? colors.primary : '#444654',
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
