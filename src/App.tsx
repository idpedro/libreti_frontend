import React, { useState, createContext, useCallback } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './Router';
import themes from './styles/themes';
import { ThemeProvider } from 'styled-components';

export type ThemeToggle = 'dark' | 'dracula';

interface IAPPContext {
  themes: string[];
  usedTheme: string | undefined;
  toggleTheme: (name: ThemeToggle) => void;
}
export const APPContext = createContext<IAPPContext>({
  themes: [],
  usedTheme: undefined,
  toggleTheme: () => {},
});

function App() {
  const [usedTheme, setTheme] = useState(
    localStorage.getItem('theme')
      ? (localStorage.getItem('theme') as ThemeToggle)
      : 'dark'
  );

  const toggleTheme = useCallback(
    (name: ThemeToggle) => {
      if (!(usedTheme === name)) {
        localStorage.setItem('theme', name);
        setTheme(name);
      }
    },
    [usedTheme]
  );

  return (
    <APPContext.Provider
      value={{ themes: Object.keys(themes), usedTheme, toggleTheme }}
    >
      <ThemeProvider theme={themes[usedTheme]}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </APPContext.Provider>
  );
}

export default App;
