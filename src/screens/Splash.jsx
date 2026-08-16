import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme/ThemeContext';

const Splash = ({ navigation }) => {
  const { colors } = useTheme();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.MainContainer}>
        <Image source={require('../assets/Logo.png')} style={styles.image} />
      </View>
      <View style={styles.LoadingContainer}>
        <Text style={{ color: colors.primary, fontSize: 16 }}>LOADING</Text>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  LoadingContainer: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'center', // Centers horizontally in a row
    alignItems: 'center', // Centers vertically in a row
    gap: 10,
  },
});
