# Wrapper

Wrapper is just a convenient component that combines both [Provider](Provider.md) and [Consumer](Consumer.md) into a single component.<br>
It helps to keep your component tree clean when using local state.

It accepts all props that [Provider](Provider.md) and [Consumer](Consumer.md) accept and requires a render function passed as children.

## Example
```javascript
import { createStore } from 'alveron'

const model = 0
const actions = {
  increment: state => state + 1,
  decrement: state => state - 1
}

const { Wrapper } = createStore({
  actions,
  model
})

const Counter = ({ defaultCount }) => (
  <Wrapper>
    {({ state, actions }) => (
      <div>
        <div>Counter: {state}</div>
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
      </div>
    )}
  </Wrapper>
)
```