import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <Link href="/index">
      <a>Basic Counter</a>
    </Link>
    <br />
    <Link href="/payload">
      <a>Payload Counter</a>
    </Link>
    <br />
    <Link href="/async">
      <a>Async Counter</a>
    </Link>
  </div>
)
