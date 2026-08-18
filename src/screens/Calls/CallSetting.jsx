import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';

const CallSetting = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <AppHeader
        title="Call Settings"
        menuItems={[
          {
            label: 'New Chat',
            onPress: () => {
              console.log('New Chat');
            },
          },
          {
            label: 'Search',
            onPress: () => {
              console.log('Search');
            },
          },
          {
            label: 'Call Settings',
            onPress: () => {
              navigation.navigate('Settings');
            },
          },
        ]}
      />
      <View style={styles.content}>
        <Text>Home</Text>
        <Button
          title="Go to Contacts"
          onPress={() => navigation.navigate('Contacts')}
        />
      </View>
    </SafeAreaView>
  );
};

export default CallSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  content: {
    flex: 1,
  },
});
