import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from 'theme-ui'
import theme from './components/local-data/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);