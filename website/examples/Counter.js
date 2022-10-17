import React, { useState } from 'react'
import { useStore } from 'alveron'

import { Box } from 'kilvin'

import Button from '../components/Button'
import Input from '../components/Input'

function getStore() {
  const model = 0

  const actions = {
    reset: () => model,
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementBy: (state, increment) => state + increment,
    decrementBy: (state, decrement) => state - decrement,
  }

  const effects = {
    incrementIn: (actions, effects, delay) =>
      setTimeout(actions.increment, delay),
    incrementIn2Seconds: (actions, effects) => effects.incrementIn(2000),
  }

  return {
    model,
    actions,
    effects,
  }
}

function useTimeTravellingDebugger() {
  const [stack, setStack] = useState([])

  function middleware(state, context) {
    setStack([
      ...stack,
      {
        newState: state,
        ...context,
      },
    ])

    return state
  }

  return {
    middleware,
    stack,
  }
}
const store = getStore()

export default function Counter() {
  const { state, actions, effects } = useStore(store)

  const [delay, setDelay] = useState(500)

  return (
    <Box space={8}>
      <Box extend={{ fontSize: 40, fontWeight: 500 }}>{state}</Box>
      <Box direction="row" space={8}>
        <Button action={() => actions.decrementBy(2)}>-2</Button>
        <Button action={actions.decrement}>-1</Button>
        <Button action={actions.increment}>+1</Button>
        <Button action={() => actions.incrementBy(2)}>+2</Button>
      </Box>
      <Box direction="row" space={8}>
        <Button action={effects.incrementIn2Seconds}>+1 in 2s</Button>
        <Box direction="row" alignItems="center" space={2}>
          <Button action={() => effects.incrementIn(delay)}>+1 in </Button>
          <Input value={delay} onChange={setDelay} />
          ms
        </Box>
      </Box>
      <Button action={actions.reset}>Reset</Button>
    </Box>
  )
}
