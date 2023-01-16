import * as React from 'react'
import { Box } from 'kilvin'

import useTheme from '../styling/useTheme'

export default function Footer() {
  const { maxLayoutWidth, colors } = useTheme()

  return (
    <Box
      paddingTop={20}
      paddingBottom={20}
      extend={{
        backgroundColor: colors.background.footer,
        color: colors.foreground.footer,
      }}>
      <Box maxWidth={maxLayoutWidth} width="100%" margin="0 auto">
        Crafted with ♡ by Robin Weser
      </Box>
    </Box>
  )
}
