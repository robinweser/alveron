import React, { useState } from 'react'
import { objectReduce } from 'fast-loops'
import { Box } from 'kilvin'
import NavGroup from './NavGroup'

export default function Navigation({ root, children }) {
  const items = objectReduce(
    children,
    (navigation, item, name) => [
      ...navigation,
      <NavGroup key={name} name={name}>
        {item}
      </NavGroup>,
    ],
    []
  )

  return <Box space={root ? 6 : 0}>{items}</Box>
}
