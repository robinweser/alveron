import * as React from 'react'
import { Box } from 'kilvin'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useFela } from 'react-fela'
import { getHeadingId } from 'next-documentation-helpers'

import config from '../../config'

import Code from './Code'
import Heading from './Heading'

import useTheme from '../../styling/useTheme'

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
export function h6({ children }) {
  return <Heading depth={6}>{children}</Heading>
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

export function strong({ children }) {
  return (
    <Box as="strong" extend={{ display: 'inline', fontWeight: 600 }}>
      {children}
    </Box>
  )
}

export function a({ href, children }) {
  const { colors } = useTheme()
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
          color: colors.foreground.link,
          ':hover': {
            color: colors.foreground.linkHover,
          },
          ':visited': {
            color: colors.foreground.linkVisited,
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

export function ul({ children }) {
  return (
    <Box
      as="ul"
      space={1}
      paddingLeft={4.5}
      extend={{
        lineHeight: 1.5,
        fontFamily: 'inherit',
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
      }}>
      {children}
    </Box>
  )
}

export function blockquote({ children }) {
  const { colors } = useTheme()

  return (
    <Box
      marginBottom={2}
      padding={4}
      paddingLeft={5}
      paddingRight={5}
      extend={{
        backgroundColor: colors.background.blockquote,
        borderRadius: 4,
        '& p': {
          marginBottom: 0,
          marginTop: 0,
        },
        '& pre': {
          backgroundColor: colors.background.blockquoteInlineCode,
        },
      }}>
      {children}
    </Box>
  )
}

export function code({ children, className = '', copy, name }) {
  return (
    <Code className={className} copy={copy} name={name}>
      {children}
    </Code>
  )
}

export function inlineCode({ children }) {
  const { colors } = useTheme()

  return (
    <Box
      as="pre"
      paddingLeft={1.5}
      paddingRight={1.5}
      extend={{
        display: 'inline-flex',
        backgroundColor: colors.background.codeBlock,
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
  const { colors } = useTheme()

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
        borderTopColor: colors.tableDivider,
      }}>
      {children}
    </Box>
  )
}

export function th({ children }) {
  const { colors } = useTheme()

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
        borderColor: colors.tableDivider,
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
