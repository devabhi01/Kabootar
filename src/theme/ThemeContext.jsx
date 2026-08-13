import React, { createContext, useContext, useState } from 'react';
import { lightColors, darkColors } from './colors';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const colors = isDark ? darkColors : lightColors;

  const toggleTheme = () => {
    setIsDark(previous => !previous);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        colors,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
};
