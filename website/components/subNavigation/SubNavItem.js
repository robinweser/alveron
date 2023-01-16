import * as React from 'react'
import Link from 'next/link'
import { Box } from 'kilvin'

export default function SubNavItem({ id, depth, children }) {
  return (
    <Link href={'#' + id} passHref>
      <Box
        as="a"
        paddingTop={1}
        paddingBottom={1}
        paddingLeft={(depth - 2) * 3}
        extend={{
          fontSize: depth === 2 ? 14 : 12,
          color: 'inherit',
          textDecoration: 'none',
          borderRadius: 7,
        }}>
        {children}
      </Box>
    </Link>
  )
}
