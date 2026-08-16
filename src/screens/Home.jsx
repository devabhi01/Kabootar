import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeContext';

const Home = () => {
  const navigation = useNavigation();
  const { colors, isDark } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      <Text>Home</Text>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
