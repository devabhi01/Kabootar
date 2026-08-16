import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme';

const CreateAccount = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={[styles.Container, { backgroundColor: colors.background }]}
    >
      <View style={styles.MainConatiner}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: colors.text, fontSize: 18 }}>Welcome to </Text>
          <Text style={{ color: colors.primary, fontSize: 22 }}>Kabootar</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 8,
    gap: 20,
  },
  MainConatiner: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
});
