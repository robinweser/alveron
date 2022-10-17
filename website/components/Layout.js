import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Grid } from 'kilvin'
import { objectReduce, arrayMap } from 'fast-loops'

import toc from '../toc.json'

function NavItem({ href, children }) {
  const router = useRouter()

  const isActive = router.query.path.join('/') === href
  const isExtern = href.startsWith('http')

  return (
    <Link href={href} passHref>
      <Box
        display="inline"
        as="a"
        rel={isExtern ? 'noopener noreferrer' : undefined}
        target={isExtern ? '_blank' : '_self'}
        padding={2}
        extend={{
          fontSize: 14,
          color: 'inherit',
          textDecoration: 'none',
          borderRadius: 7,
          extend: {
            condition: isActive,
            style: {
              backgroundColor: 'rgb(240, 240, 240)',
            },
          },
        }}>
        {children}
        {isExtern && (
          <Box
            as="svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 32 32"
            extend={{
              verticalAlign: '-2px',
              color: 'inherit',
              width: 16,
              height: 16,
              stroke: 'currentcolor',
              strokeWidth: '2px',
              display: 'inline-block',
            }}>
            <path d="M22 11L10.5 22.5M10.44 11H22v11.56" fill="none"></path>
          </Box>
        )}
      </Box>
    </Link>
  )
}

function NavHeading({ children }) {
  return (
    <Box
      as="p"
      extend={{
        color: 'rgb(100, 100, 100)',
      }}>
      {children}
    </Box>
  )
}

function renderNavigation(items) {
  return objectReduce(
    items,
    (navigation, item, name) => [...navigation, renderItem(name, item)],
    []
  )
}

function renderItem(name, items) {
  if (typeof items === 'string') {
    return <NavItem href={items}>{name}</NavItem>
  }

  return (
    <Box space={2}>
      <NavHeading>{name}</NavHeading>
      <Box>{renderNavigation(items)}</Box>
    </Box>
  )
}

function SideNavItem({ id, depth, children }) {
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

function renderSideNavigation(items) {
  return arrayMap(items, (props) => <SideNavItem {...props} />)
}

function GithubIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" {...props}>
      <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
    </svg>
  )
}

export default function Layout({ children, headings }) {
  const showSubNavigation = headings.length > 2

  return (
    <Box maxWidth={1400} margin="0 auto">
      <Grid columns={['250px 1fr 250px']} gap={14}>
        <Box
          as="nav"
          height="100vh"
          padding={4}
          paddingRight={8}
          space={6}
          extend={{
            borderRight: '1px solid rgb(240, 240, 240)',
            position: 'sticky',
            top: 0,
          }}>
          <Box
            paddingTop={2}
            paddingBottom={2}
            direction="row"
            space={4}
            alignItems="center"
            justifyContent="space-between">
            <Box extend={{ fontSize: 20, fontWeight: 700 }}>Alveron</Box>
            <Box
              as="a"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/robinweser/alveron">
              <GithubIcon width={40} />
            </Box>
          </Box>
          {renderNavigation(toc)}
        </Box>
        <Box as="main" paddingTop={10} paddingBottom={40}>
          {children}
        </Box>

        <Box
          as="nav"
          height="100vh"
          padding={4}
          paddingTop={12}
          paddingLeft={0}
          extend={{
            position: 'sticky',
            top: 0,
          }}>
          {showSubNavigation && (
            <Box space={4}>
              <NavHeading>Table of Contents</NavHeading>
              <Box>{renderSideNavigation(headings)}</Box>
            </Box>
          )}
        </Box>
      </Grid>
    </Box>
  )
}
