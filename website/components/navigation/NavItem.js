import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Box } from 'kilvin'

import useTheme from '../../styling/useTheme'

export default function NavItem({ href, children }) {
  const { colors } = useTheme()
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
              backgroundColor: colors.background.navigationItemActive,
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
            <path d="M22 11L10.5 22.5M10.44 11H22v11.56" fill="none" />
          </Box>
        )}
      </Box>
    </Link>
  )
}
