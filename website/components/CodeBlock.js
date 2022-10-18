import React, { useState, useEffect, useContext } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import github from 'prism-react-renderer/themes/github'
import Head from 'next/head'
import { Box } from 'kilvin'
import { useFela } from 'react-fela'

export default function CodeBlock({ children, className = '', copy, name }) {
  const { theme } = useFela()

  const language = className.replace(/language-/, '') || 'js'

  // Remove newline from end of code
  const code = children.replace(/\n$/g, '')

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/fonts/dank/dmvendor.css" />
      </Head>

      <Highlight
        {...defaultProps}
        theme={github}
        code={code}
        language={language}>
        {({ tokens, getTokenProps }) => (
          <Box
            as="pre"
            padding={5}
            marginTop={3}
            marginBottom={3}
            extend={{
              backgroundColor: 'rgb(245, 245, 245)',
              overflow: 'auto',
            }}>
            <Box
              as="code"
              extend={{
                fontSize: 16,
                fontFamily:
                  'dm, Dank, Dank Mono, Fira Code, Hack, Consolas, monospace',
                textRendering: 'optimizeLegibility',
              }}>
              {tokens.map((line, i) => (
                <div key={i}>
                  {line.map((token, key) => {
                    const props = getTokenProps({ token, key })

                    if (key === 0 && !props.children && line.length !== 1) {
                      return null
                    }

                    return (
                      <Box
                        as="span"
                        extend={{
                          display: 'inline',
                          backgroundColor: 'transparent !important',
                        }}
                        key={key}
                        data-key={key}
                        {...props}>
                        {/* {props.children || ' '} */}
                      </Box>
                    )
                  })}
                </div>
              ))}
            </Box>
          </Box>
        )}
      </Highlight>
    </>
  )
}
