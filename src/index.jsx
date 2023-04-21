import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GorditaLight from './font/Gordita/Gordita-Light.woff2';
import GorditaRegular from './font/Gordita/Gordita-Regular.woff2';
import GorditaMedium from './font/Gordita/Gordita-Medium.woff2';
import GorditaBold from './font/Gordita/Gordita-Bold.woff2';
import GorditaBlack from './font/Gordita/Gordita-Black.woff2';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Gordita',
      'Comfortaa',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Gordita';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: url(${GorditaLight}) format('woff2');
        },
        @font-face {
          font-family: 'Gordita';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${GorditaRegular}) format('woff2');
        },
        @font-face {
          font-family: 'Gordita';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: url(${GorditaMedium}) format('woff2');
        },
        @font-face {
          font-family: 'Gordita';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: url(${GorditaBold}) format('woff2');
        },
        @font-face {
          font-family: 'Gordita';
          font-style: normal;
          font-display: swap;
          font-weight: 900;
          src: url(${GorditaBlack}) format('woff2');
        }
      `,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: '#FCA311',
    },
    secondary: {
      main: 'rgba(252, 163, 17,.04)',
    },
    error: {
      main: '#f91155',
    },
    success: {
      main: '#10c44c',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#14213D',
      secondary: '#8f9fa7',
    },
  },
  shape: {
    borderRadius: 8,
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
