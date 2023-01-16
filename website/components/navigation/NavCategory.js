import * as React from 'react'
import { Box } from 'kilvin'

import useTheme from '../../styling/useTheme'

export default function NavCategory({ children }) {
  const { colors } = useTheme()

  return (
    <Box
      as="p"
      extend={{
        color: colors.foreground.navigationCategory,
      }}>
      {children}
    </Box>
  )
}
