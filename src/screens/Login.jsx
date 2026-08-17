import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Main Content */}
          <View style={styles.mainContent}>
            {/* Logo */}
            <Image source={require('../assets/Logo.png')} style={styles.logo} />

            {/* Welcome */}
            <View style={styles.welcomeContainer}>
              <Text
                style={{
                  color: colors.text,
                  fontSize: 18,
                }}
              >
                Welcome to
              </Text>

              <Text
                style={{
                  color: colors.primary,
                  fontSize: 22,
                }}
              >
                Kabootar
              </Text>
            </View>

            {/* Login Form */}
            <View style={styles.formContainer}>
              {/* Phone Input */}
              <TextInput
                style={[
                  styles.input,
                  {
                    color: colors.text,
                    borderColor: colors.border,
                  },
                ]}
                placeholder="Phone Number"
                placeholderTextColor={colors.textSecondary}
                keyboardType="phone-pad"
                value={phone}
                onChangeText={text => {
                  const onlyNumbers = text.replace(/[^0-9]/g, '');
                  setPhone(onlyNumbers);
                }}
                maxLength={10}
              />

              {/* Continue Button */}
              <TouchableOpacity
                style={[
                  styles.continueButton,
                  {
                    backgroundColor: colors.primary,
                  },
                ]}
                onPress={() => navigation.navigate('Main')}
              >
                <View style={styles.buttonContent}>
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 18,
                    }}
                  >
                    Continue
                  </Text>

                  <Image
                    source={require('../assets/icons/next.png')}
                    style={[
                      styles.nextIcon,
                      {
                        tintColor: colors.text,
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>

              {/* Create Account */}
              <View style={styles.createAccountContainer}>
                <Text
                  style={{
                    color: colors.textSecondary,
                    fontSize: 14,
                  }}
                >
                  No account?
                </Text>

                <TouchableOpacity
                  onPress={() => navigation.navigate('CreateAccount')}
                >
                  <Text
                    style={{
                      color: colors.primary,
                      fontSize: 14,
                    }}
                  >
                    Create account
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Terms */}
          <View style={styles.termsContainer}>
            <View style={styles.termsRow}>
              <Text
                style={{
                  color: colors.textSecondary,
                  fontSize: 12,
                }}
              >
                By continuing, you agree to our{' '}
              </Text>

              <TouchableOpacity>
                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 12,
                  }}
                >
                  Terms of Service
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.termsRow}>
              <Text
                style={{
                  color: colors.textSecondary,
                  fontSize: 12,
                }}
              >
                and{' '}
              </Text>

              <TouchableOpacity>
                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 12,
                  }}
                >
                  Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },

  mainContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 100,
  },

  welcomeContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },

  formContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '80%',
    fontSize: 16,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
  },

  continueButton: {
    marginTop: 20,
    width: '80%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },

  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },

  createAccountContainer: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },

  termsContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },

  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
