import React from 'react'
import { createStore } from 'alveron'

const model = 0
const actions = {
  increment: state => state + 1,
  decrement: state => state - 1,
  incrementBy: (state, step) => state + step,
  decrementBy: (state, step) => state - step,
}

const { Wrapper } = createStore({
  model,
  actions,
})

export default () => (
  <Wrapper>
    {({ state, actions }) => (
      <div>
        <div>Counter: {state}</div>
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={() => actions.incrementBy(5)}>+5</button>
        <button onClick={() => actions.decrementBy(5)}>-5</button>
      </div>
    )}
  </Wrapper>
)
