# Consumer

The Consumer component is used to access  state, actions and effects from the closest [Provider](Provider.md) component.

It provides a render-prop interface that passes a single object containing state, actions and effects to the render function.

> It **must** be wrapped by at least one Provider component or else it throws an error.

## Example
```javascript
import { createStore } from 'alveron'

const model = 0
const actions = {
  increment: state => state + 1,
  decrement: state => state - 1
}

const { Provider, Consumer } = createStore({
  actions,
  model
})

const Counter = () => (
  <Provider>
    <Consumer>
      {({ state, actions }) => (
        <div>
          <div>Counter: {state}</div>
          <button onClick={actions.increment}>+</button>
          <button onClick={actions.decrement}>-</button>
        </div>
      )}
    </Consumer>
  </Provider>
)
```