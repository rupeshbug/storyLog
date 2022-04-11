import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {CacheProvider} from '@emotion/react'
import {ThemeProvider,CssBaseline} from '@mui/material'
import createEmotionCache from '../utils/createEmotionCache'
import darkTheme from '../styles/theme/darktheme'

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: any) {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
  )
}
export default MyApp
