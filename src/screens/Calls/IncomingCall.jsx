import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useTheme } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const IncomingCall = () => {
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
      <View style={styles.content}>
        <Text
          style={{ color: colors.textSecondary, marginTop: 72, fontSize: 16 }}
        >
          INCOMING CALL
        </Text>
        <Image
          style={[styles.Img, { borderColor: colors.border }]}
          source={require('../../assets/dummy.webp')}
        />
        <Text style={{ color: colors.text, marginTop: 36, fontSize: 24 }}>
          SPOIDERMON
        </Text>
        <Text
          style={{
            color: colors.text,
            marginTop: 12,
            fontSize: 16,
            letterSpacing: 1.1,
          }}
        >
          +917290901622
        </Text>
        <View
          style={{
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            gap: 24,
            marginTop: 'auto',
            marginBottom: 96,
          }}
        >
          <TouchableOpacity
            style={[styles.Btn, { backgroundColor: '#ff000080' }]}
          >
            <Image
              style={[styles.Icon, { tintColor: colors.text }]}
              source={require('../../assets/icons/decline.png')}
            />
            <Text style={{ color: colors.text, fontSize: 16 }}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.Btn, { backgroundColor: '#09ff0080' }]}
          >
            <Image
              style={[styles.Icon, { tintColor: colors.text }]}
              source={require('../../assets/icons/accept.png')}
            />
            <Text style={{ color: colors.text, fontSize: 16 }}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IncomingCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  Icon: {
    width: 24,
    height: 24,
  },
  Btn: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    gap: 8,
  },
  Img: {
    borderRadius: 100,
    width: 124,
    borderWidth: 3,
    height: 124,
    marginTop: 64,
  },
});
