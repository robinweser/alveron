import React from 'react'

import AsyncCounter from '../components/AsyncCounter'
import Navigation from '../components/_Navigation'

export default () => (
  <div>
    <Navigation />
    <br />
    <h1>Async Counter</h1>
    <div>
      <AsyncCounter />
    </div>
  </div>
)
