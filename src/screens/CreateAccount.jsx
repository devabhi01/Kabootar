import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme';

const CreateAccount = () => {
  const { colors } = useTheme();
  const [phone, setPhone] = useState('');
  return (
    <SafeAreaView
      style={[styles.Container, { backgroundColor: colors.background }]}
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
          <View style={styles.MainConatiner}>
            {/* Welcome Message with Logo */}
            <View style={styles.MainConatiner}>
              <Image
                source={require('../assets/Logo.png')}
                style={styles.logo}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: colors.text, fontSize: 18 }}>
                  Welcome to{' '}
                </Text>
                <Text style={{ color: colors.primary, fontSize: 22 }}>
                  Kabootar
                </Text>
              </View>
            </View>

            {/* Form Area  */}
            <View style={styles.Form}>
              <TextInput
                style={[
                  styles.TextInput,
                  { borderColor: colors.border, color: colors.text },
                ]}
                placeholderTextColor={colors.textSecondary}
                placeholder="Full Name"
              />
              <TextInput
                style={[
                  styles.TextInput,
                  { borderColor: colors.border, color: colors.text },
                ]}
                placeholderTextColor={colors.textSecondary}
                placeholder="Email"
              />
              <TextInput
                style={[
                  styles.TextInput,
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
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
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

  Form: {
    marginTop: 20,
    width: '80%',
    gap: 15,
  },
  TextInput: {
    fontSize: 16,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
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
