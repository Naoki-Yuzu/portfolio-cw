import React from 'react';
// import { CacheProvider } from '@emotion/react';
// import { ThemeProvider, CssBaseline } from '@mui/material';
// import createEmotionCache from '../src/createEmotionCache';
import { ThemeProvider } from 'styled-components'
// import theme from '../styles/theme';
import Layout from '../components/layout';
// import '../styles/globals.css';

// const clientSideEmotionCache = createEmotionCache();

const theme  = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

const MyApp = ({Component, pageProps}) => {
  // const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    // <CacheProvider value={emotionCache}>
      // {/* <Head>
      //   <meta name="viewport" content="initial-scale=1, width=device-width" />
      // </Head> */}
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    // </CacheProvider>
  );
};

export default MyApp;
