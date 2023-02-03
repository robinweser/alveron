import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box, Grid } from 'kilvin'
import { objectReduce, arrayMap } from 'fast-loops'

import Navigation from './navigation/Navigation'
import SubNavigation from './subNavigation/SubNavigation'
import Github from './icons/Github'
import NavCategory from './navigation/NavCategory'

import { useConfig } from './Config'

import useTheme from '../styling/useTheme'

import toc from '../toc.json'

export default function Layout({ children, headings }) {
  const { maxLayoutWidth, navigationWidth, subNavigationWidth, colors } =
    useTheme()
  const { title, repository } = useConfig()

  const showSubNavigation = headings.length >= 2

  return (
    <Box maxWidth={maxLayoutWidth} margin="0 auto">
      <Grid
        columns={[`${navigationWidth}px 1fr ${subNavigationWidth}px`]}
        gap={14}>
        <Box
          as="nav"
          minHeight="100vh"
          height="100vh"
          padding={4}
          paddingLeft={0}
          paddingRight={8}
          paddingBottom={10}
          space={6}
          extend={{
            overflowY: 'scroll',
            borderRightWidth: 1,
            borderRightStyle: 'solid',
            borderRightColor: colors.navigationDivider,
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
            <Box extend={{ fontSize: 20, fontWeight: 700 }}>{title}</Box>
            <Box
              as="a"
              rel="noopener noreferrer"
              target="_blank"
              href={repository}>
              <Github width={34} />
            </Box>
          </Box>
          <Navigation root>{toc}</Navigation>
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
            overflowY: 'scroll',
            position: 'sticky',
            top: 0,
          }}>
          {showSubNavigation && (
            <Box space={4}>
              <NavCategory>Table of Contents</NavCategory>
              <Box>
                <SubNavigation>{headings}</SubNavigation>
              </Box>
            </Box>
          )}
        </Box>
      </Grid>
    </Box>
  )
}
