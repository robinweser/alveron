import Head from 'next/head'
import { ThemeProvider } from 'react-fela'

import FelaProvider from '../styling/FelaProvider'

import theme from '../styling/theme'

export default function App({ Component, pageProps, renderer }) {
  return (
    <FelaProvider renderer={renderer}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,height=device-height,initial-scale=1, viewport-fit=cover"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </FelaProvider>
  )
}
