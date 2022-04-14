import '../styles/globals.css';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../utils/createEmotionCache';
import darkTheme from '../styles/theme/darktheme';
import Navbar from '../components/common/Navbar';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
