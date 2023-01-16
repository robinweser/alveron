import { useContext } from 'react'
import { RendererProvider, RendererContext, ThemeProvider } from 'react-fela'
import getFelaRenderer from './getFelaRenderer'

import theme from '../theme'

const clientRenderer = getFelaRenderer()

export default function FelaProvider({ renderer = clientRenderer, children }) {
  const contextRenderer = useContext(RendererContext)

  if (contextRenderer) {
    return children
  }

  return (
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RendererProvider>
  )
}
