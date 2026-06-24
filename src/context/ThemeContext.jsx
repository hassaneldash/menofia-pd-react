import { createContext, useState } from 'react';

// 1. Create Context, Default Fallback value
export const ThemeContext = createContext(null);

// 2. Create Provider Component to hold state and wrap entire application

export const ThemeProvider = ({ children }) => {
  // Create State, we want to share
  const [theme, setTheme] = useState('light');

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

/*
{
  theme: theme,
  setTheme: setTheme
}

=> {theme, setTheme}
*/
