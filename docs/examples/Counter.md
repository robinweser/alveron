# Example: Counter

> You may also check out the [Counter Example package](https://github.com/rofrischmann/alveron/tree/master/examples/Counter/README.md) to see these examples in action.

The counter example has emerged as one of the most basic examples for showcasing state management tools. Here we go:

### Basic Counter
```javascript
import React from 'react'
import { createStore } from 'alveron'

const model = 0
const actions = {
  increment: state => state + 1,
  decrement: state => state - 1
}

const { Provider, Consumer } = createStore({
  model,
  actions
})

const Counter = () => (
  <Provider>
    <Consumer>
      {({ state, actions }) => (
        <div>
          <div>{state}</div>
          <button onClick={actions.increment}>+</button>
          <button onClick={actions.decrement}>-</button>
        </div>
      )}
    </Consumer>
  </Provider>
)
```

### Dynamic Steps
Instead of always incrementing or decrementing by one, we can also pass a step value to e.g. increment by 5.

```javascript
import React from 'react'
import { createStore } from 'alveron'

const model = 0
const actions = {
  increment: state => state + 1,
  decrement: state => state - 1,
  incrementBy: (state, step) => state + step,
  decrementBy: (state, step) => state - step
}

const { Provider, Consumer } = createStore({
  model,
  actions
})

const Counter = () => (
  <Provider>
    <Consumer>
      {({ state, actions }) => (
        <div>
          <div>{state}</div>
          <button onClick={actions.increment}>+</button>
          <button onClick={actions.decrement}>-</button>
          <button onClick={() => actions.incrementBy(5)}>+5</button>
          <button onClick={() => actions.decrementBy(5)}>-5</button>
        </div>
      )}
    </Consumer>
  </Provider>
)
```

### Asynchronous Steps
Apart from triggering state changes through user interaction, we can also use effects to trigger changes asynchronously e.g. after a given delay.

```javascript
import React from 'react'
import { createStore } from 'alveron'

const model = 0
const actions = {
  increment: state => state + 1,
  decrement: state => state - 1
}
const effects = {
  incrementAfter: (actions, delay) => setTimeout(actions.increment, delay)
}

const { Provider, Consumer } = createStore({
  model,
  actions,
  effects
})

const Counter = () => (
  <Provider>
    <Consumer>
      {({ state, actions, effects }) => (
        <div>
          <div>{state}</div>
          <button onClick={actions.increment}>+</button>
          <button onClick={actions.decrement}>-</button>
          <button onClick={() => effects.incrementAfter(1000)}>+ (delayed 1s)</button>
        </div>
      )}
    </Consumer>
  </Provider>
)
```