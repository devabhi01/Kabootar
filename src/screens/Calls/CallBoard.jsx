import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/AppHeader';
import { useTheme } from '../../theme';

const CallBoard = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [callType, setCallType] = useState('audio');
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
        {callType === 'audio' ? <AudioCall /> : <VideoCall />}
      </View>
    </SafeAreaView>
  );
};

export default CallBoard;

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
