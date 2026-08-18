import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';

const Calls = () => {
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
        title="Calls"
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
              navigation.navigate('CallSetting');
            },
          },
        ]}
      />
      <View style={styles.content}>
        <Text>Incoming Call</Text>
        <Button
          title="Go to Incoming Call"
          onPress={() => navigation.navigate('IncomingCall')}
        />
      </View>
      <View style={styles.content}>
        <Text>OutGoing Call</Text>
        <Button
          title="Go to OutgoingCall"
          onPress={() => navigation.navigate('OutgoingCall')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Calls;

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
