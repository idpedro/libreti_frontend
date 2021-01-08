import React, { useState, createContext, useCallback, useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './Router';
import themes from './styles/themes';
import { ThemeProvider, DefaultTheme } from 'styled-components';

export type ThemeToggle = 'dark' | 'dracula';

interface IAPPContext {
  themes: {};
  theme: { name?: string; theme?: DefaultTheme | null };
  toggleTheme: (name: ThemeToggle) => void;
}
export const APPContext = createContext<IAPPContext>({
  themes: {},
  theme: {},
  toggleTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState({
    name: localStorage.getItem('theme')
      ? (localStorage.getItem('theme') as ThemeToggle)
      : 'dark',
    theme: themes[ localStorage.getItem('theme')?(localStorage.getItem('theme') as ThemeToggle): 'dark' ]
  });

  const toggleTheme = useCallback(
    (name: ThemeToggle) => {
      if (!(theme.name === name)) {
        localStorage.setItem('theme', name);
        setTheme({ name, theme: themes[name] });
      }
    },
    [theme.name]
  );
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      toggleTheme(localStorage.getItem('theme') as ThemeToggle);
    } else {
      localStorage.setItem('theme', theme.name);
    }
  });
  return (
    <APPContext.Provider value={{ themes, theme, toggleTheme }}>
      <ThemeProvider theme={theme.theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </APPContext.Provider>
  );
}

export default App;
