import Head from 'next/head'
import { ThemeProvider } from 'react-fela'

import FelaProvider from '../styling/FelaProvider'

import { ConfigProvider } from '../components/Config'

import config from '../config'

export default function App({ Component, pageProps, renderer }) {
  return (
    <ConfigProvider config={config}>
      <FelaProvider renderer={renderer}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,height=device-height,initial-scale=1, viewport-fit=cover"
          />
        </Head>
        <Component {...pageProps} />
      </FelaProvider>
    </ConfigProvider>
  )
}
