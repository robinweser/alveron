import * as React from 'react'
import { Box } from 'kilvin'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useFela } from 'react-fela'

import CodeBlock from './CodeBlock'

import getHeadingId from '../utils/getHeadingId'

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

const headingSizes = {
  1: 46,
  2: 32,
  3: 28,
  4: 22,
  5: 18,
  6: 16,
}

function Heading({ depth, children }) {
  const { theme } = useFela()

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
          window.location.hash = id
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
          scrollMarginTop: 6 * theme.baselineGrid,
        },
      }}>
      {children}
    </Box>
  )
}

export function a({ href, children }) {
  const router = useRouter()

  const isExtern = href.indexOf('http') !== -1
  const isAnchor = href.indexOf('#') === 0
  const resolvedHref = isExtern
    ? href
    : isAnchor
    ? router.pathname + href
    : '/' + href

  return (
    <Link href={resolvedHref} passHref>
      <Box
        as="a"
        display="inline"
        href={resolvedHref}
        extend={{
          color: 'rgb(54, 122, 180)',
          ':hover': {
            color: 'rgb(35, 88, 134)',
          },
        }}>
        {children}
      </Box>
    </Link>
  )
}

export function pre({ children }) {
  return children
}
export function h1({ children }) {
  return <Heading depth={1}>{children}</Heading>
}
export function h2({ children }) {
  return <Heading depth={2}>{children}</Heading>
}
export function h3({ children }) {
  return <Heading depth={3}>{children}</Heading>
}
export function h4({ children }) {
  return <Heading depth={4}>{children}</Heading>
}
export function h5({ children }) {
  return <Heading depth={5}>{children}</Heading>
}
export function strong({ children }) {
  return (
    <Box as="strong" extend={{ display: 'inline', fontWeight: 600 }}>
      {children}
    </Box>
  )
}

export function ul({ children }) {
  return (
    <Box
      as="ul"
      space={1}
      paddingLeft={4.5}
      extend={{
        lineHeight: 1.5,
        fontFamily: 'inherit',
        // color: theme.colors.foreground,
      }}>
      {children}
    </Box>
  )
}
export function ol({ children }) {
  return (
    <Box
      as="ol"
      space={1}
      marginTop={2.5}
      marginBottom={2.5}
      paddingLeft={6}
      extend={{
        lineHeight: 1.5,
        fontFamily: 'inherit',
        // color: theme.colors.foreground,
      }}>
      {children}
    </Box>
  )
}

export function blockquote({ children }) {
  return (
    <Box
      marginBottom={2}
      padding={4}
      paddingLeft={5}
      paddingRight={5}
      extend={{
        backgroundColor: 'rgb(222, 240, 248)',
        borderRadius: 4,
        '& p': {
          marginBottom: 0,
          marginTop: 0,
        },
        '& pre': {
          // backgroundColor: theme.colors.cyanCode,
        },
      }}>
      {children}
    </Box>
  )
}

export function code({ children, className = '', copy, name }) {
  return (
    <CodeBlock className={className} copy={copy} name={name}>
      {children}
    </CodeBlock>
  )
}

export function inlineCode({ children }) {
  return (
    <Box
      as="pre"
      paddingLeft={1.5}
      paddingRight={1.5}
      extend={{
        display: 'inline-flex',
        // backgroundColor: theme.colors.background,
      }}>
      <Box
        as="code"
        extend={{
          fontSize: 16,
          fontFamily:
            'dm, Dank, Dank Mono, Fira Code, Hack, Consolas, monospace',
          textRendering: 'optimizeLegibility',
        }}>
        {children}
      </Box>
    </Box>
  )
}

export function p({ children }) {
  return (
    <Box
      as="p"
      marginTop={1}
      marginBottom={1}
      extend={{
        display: 'inline-block',
        fontSize: 16,
        lineHeight: 1.5,
        '& + p': {
          marginTop: 8,
        },
      }}>
      {children}
    </Box>
  )
}

export function tr({ children }) {
  return (
    <Box
      as="tr"
      display="table-row"
      extend={{
        border: 0,
      }}>
      {children}
    </Box>
  )
}

export function td({ children }) {
  return (
    <Box
      as="td"
      display="table-cell"
      padding={2.5}
      extend={{
        textAlign: 'left',
        overflow: 'auto',
        lineHeight: 1.4,
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: 'separator',
      }}>
      {children}
    </Box>
  )
}

export function th({ children }) {
  return (
    <Box
      as="th"
      padding={2}
      display="table-cell"
      extend={{
        textAlign: 'left',
        overflow: 'auto',
        lineHeight: 1.4,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderStyle: 'solid',
        borderColor: 'separator',
      }}>
      {children}
    </Box>
  )
}

export function table({ children }) {
  return (
    <Box maxWidth="100%" extend={{ overflow: 'auto' }}>
      <Box
        as="table"
        display="table"
        marginTop={1}
        extend={{ borderCollapse: 'collapse' }}>
        {children}
      </Box>
    </Box>
  )
}
