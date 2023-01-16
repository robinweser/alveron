import * as React from 'react'
import { getHeadingId } from 'next-documentation-helpers'
import { Box } from 'kilvin'

import useTheme from '../../styling/useTheme'

function getMarginTop(depth) {
  const baseMargin = depth === 1 ? 0 : 6

  switch (depth) {
    case 1:
      return baseMargin
    case 2:
      return baseMargin + 6
    case 3:
      return baseMargin + 3
    case 4:
      return baseMargin + 3
    default:
      return baseMargin
  }
}

function getMarginBottom(depth) {
  switch (depth) {
    case 1:
      return 4
    default:
      return 1
  }
}

function scrollTo(id) {
  window.location.hash = id
}

export default function Heading({ depth, children }) {
  const { headingSizes, baselineGrid } = useTheme()

  const id = getHeadingId(children)

  const marginTop = getMarginTop(depth)
  const marginBottom = getMarginBottom(depth)
  const fontSize = headingSizes[depth]
  const lineHeight = depth === 2 ? 1.6 : 1.2

  const isAnchor = depth > 1 && id

  return (
    <Box
      id={isAnchor ? id : undefined}
      as={'h' + depth}
      onClick={() => {
        if (isAnchor) {
          scrollTo(id)
        }
      }}
      display="block"
      marginTop={marginTop}
      marginBottom={marginBottom}
      extend={{
        fontSize,
        cursor: isAnchor ? 'pointer' : 'inherit',
        lineHeight,
        overflow: 'hidden',
        whiteSpace: 'wrap',
        textOverflow: 'ellipsis',
        '> a': {
          color: 'inherit',
        },
        medium: {
          scrollMarginTop: 6 * baselineGrid,
        },
      }}>
      {children}
    </Box>
  )
}
