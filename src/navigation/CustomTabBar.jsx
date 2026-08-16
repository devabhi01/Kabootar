import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  const tabs = {
    Home: {
      icon: require('../assets/icons/home.png'),
      activeIcon: require('../assets/icons/homea.png'),
      label: 'Home',
    },

    Calls: {
      icon: require('../assets/icons/home.png'),
      activeIcon: require('../assets/icons/homea.png'),
      label: 'Calls',
    },

    Contacts: {
      icon: require('../assets/icons/home.png'),
      activeIcon: require('../assets/icons/homea.png'),
      label: 'Contacts',
    },
    Profile: {
      icon: require('../assets/icons/home.png'),
      activeIcon: require('../assets/icons/homea.png'),
      label: 'Profile',
    },
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Math.max(insets.bottom, 8),
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const tab = tabs[route.name];

        if (!tab) {
          return null;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tab, isFocused && styles.activeTab]}
          >
            {/* <Ionicons
              name={isFocused ? tab.activeIcon : tab.icon}
              size={28}
              color={isFocused ? '#8D9AEF' : '#444654'}
            /> */}

            <Text style={[styles.label, isFocused && styles.activeLabel]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#EEF0F4',

    paddingHorizontal: 18,
    paddingTop: 12,

    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
  },

  tab: {
    flex: 1,

    height: 70,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 35,
  },

  activeTab: {
    backgroundColor: '#11158F',
  },

  label: {
    marginTop: 5,

    fontSize: 16,
    fontWeight: '600',

    color: '#444654',
  },

  activeLabel: {
    color: '#A4AEFF',
  },
});

export default CustomTabBar;
