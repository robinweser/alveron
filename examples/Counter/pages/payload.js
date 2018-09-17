import React from 'react'

import PayloadCounter from '../components/PayloadCounter'
import Navigation from '../components/_Navigation'

export default () => (
  <div>
    <Navigation />
    <br />
    <h1>Payload Counter</h1>
    <div>
      <PayloadCounter />
    </div>
  </div>
)
