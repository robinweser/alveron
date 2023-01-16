import React, { useState } from 'react'
import { useStore } from 'alveron'

import { Box } from 'kilvin'

import Button from '../components/examples/Button'
import Input from '../components/examples/Input'

const model = 0
const actions = {
  reset: () => [model],
  increment: (state) => [state + 1],
  decrement: (state) => [state - 1],
  incrementBy: (state, increment) => [state + increment],
  decrementBy: (state, decrement) => [state - decrement],
  incrementIn: (state, delay) => [
    state,
    (actions) => setTimeout(actions.increment, delay),
  ],
}

export default function Counter() {
  const [
    state,
    { decrementBy, decrement, increment, incrementBy, incrementIn, reset },
  ] = useStore(actions, model)

  const [delay, setDelay] = useState(500)

  return (
    <Box space={8}>
      <Box extend={{ fontSize: 40, fontWeight: 500 }}>{state}</Box>
      <Box direction="row" space={8}>
        <Button action={() => decrementBy(2)}>-2</Button>
        <Button action={decrement}>-1</Button>
        <Button action={increment}>+1</Button>
        <Button action={() => incrementBy(2)}>+2</Button>
      </Box>
      <Box direction="row" space={8}>
        <Box direction="row" alignItems="center" space={2}>
          <Button action={() => incrementIn(delay)}>+1 in </Button>
          <Input value={delay} onChange={setDelay} />
          ms
        </Box>
      </Box>
      <Button action={reset}>Reset</Button>
    </Box>
  )
}
