import * as React from 'react'

import Footer from './Footer'

export default function Template({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
