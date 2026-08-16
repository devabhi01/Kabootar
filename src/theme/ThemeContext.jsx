import React, { createContext, useContext, useMemo, useState } from 'react';

import { useColorScheme } from 'react-native';

import { lightColors, darkColors } from './colors';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // Detect phone's system theme
  const systemColorScheme = useColorScheme();

  // User's selected preference
  // system = follow phone
  // light  = always light
  // dark   = always dark
  const [themeMode, setThemeMode] = useState('system');

  const isDark =
    themeMode === 'dark' ||
    (themeMode === 'system' && systemColorScheme === 'dark');

  const colors = isDark ? darkColors : lightColors;

  const value = useMemo(
    () => ({
      themeMode,
      setThemeMode,
      isDark,
      colors,
      systemColorScheme,
    }),
    [themeMode, isDark, colors, systemColorScheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  console.log('ThemeContext:', context); // Debugging line

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
};
