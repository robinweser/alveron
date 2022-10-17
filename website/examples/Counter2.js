import * as React from 'react'
import { useStore } from 'alveron'

import { Box } from 'kilvin'

function Button({ action, children }) {
  return (
    <Box
      as="button"
      onClick={action}
      padding={4}
      minWidth={70}
      extend={{
        fontSize: 16,
        borderRadius: 7,
        backgroundColor: 'blue',
        color: 'white',
        appearance: 'none',
        cursor: 'pointer',
        border: 0,
      }}>
      {children}
    </Box>
  )
}

function Input({ value, onChange }) {
  return (
    <Box
      as="input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      padding={4}
      minWidth={50}
      extend={{
        fontSize: 16,
        borderRadius: 7,
        appearance: 'none',
        cursor: 'pointer',
        border: '1px solid rgb(180, 180, 180)',
      }}
    />
  )
}

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

export default function Counter() {
  const { state, actions, effects } = useStore(getStore())
  const [delay, setDelay] = React.useState(500)

  return (
    <Box alignItems="center" padding={8} space={8}>
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
