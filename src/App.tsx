import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './Router';
import themes from './styles/themes';
import {ThemeProvider} from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyles  />
      <Routes />
    </ThemeProvider>
  );
}

export default App;