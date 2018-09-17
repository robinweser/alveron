import React from 'react'
import { createStore } from 'alveron'

const model = 0
const actions = {
  increment: state => state + 1,
  decrement: state => state - 1,
}

const effects = {
  incrementAfter: (actions, delay) => setTimeout(actions.increment, delay),
}

const { Wrapper } = createStore({
  model,
  actions,
  effects,
})

export default () => (
  <Wrapper>
    {({ state, actions, effects }) => (
      <div>
        <div>Counter: {state}</div>
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={() => effects.incrementAfter(1000)}>
          + (delayed 1s)
        </button>
      </div>
    )}
  </Wrapper>
)
