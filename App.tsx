import React from 'react';

import { ThemeProvider } from './src/theme';
import Home from './src/screens/Home';



const App = () => {
  return (
    <ThemeProvider>
     <Home />
    </ThemeProvider>
  );
};

export default App;