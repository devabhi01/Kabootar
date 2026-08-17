import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme';

const AppHeader = ({ title }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.LeftContent]}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      </View>
      <View style={styles.RightContent}>
        <Text style={styles.title}>Hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    backgroundColor: '#453665',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  content: {
    width: '100%',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default AppHeader;
