import React, { useState } from 'react'
import { Box } from 'kilvin'

import Navigation from './Navigation'
import NavCategory from './NavCategory'
import NavItem from './NavItem'

export default function NavGroup({ name, children }) {
  const [expanded, setExpanded] = useState(true)

  if (typeof children === 'string') {
    return <NavItem href={children}>{name}</NavItem>
  }

  return (
    <Box space={2}>
      <NavCategory>{name}</NavCategory>
      <Box>
        <Navigation>{children}</Navigation>
      </Box>
    </Box>
  )
}
