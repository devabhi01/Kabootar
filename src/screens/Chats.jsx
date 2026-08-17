import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '../components/AppHeader';

const Chats = () => {
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
      <AppHeader title="Kabootar" />

      <View style={styles.content}>
        <Text style={{ color: colors.text }}>Home</Text>

        <Button
          title="Go to login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chats;

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
