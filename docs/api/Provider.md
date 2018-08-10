# Provider

The Provider component keeps an instance of the store and provides it to all nested [Consumer](Consumer.md) components.

## Props
| Property | Type | Description |
| -------- | ---- | ----------- |
| initialState |*(any?)* | An initial state unique to this Provider instance. It overwrites the global model. |

## Example
```javascript
import { createStore } from 'react-woodworm'

const model = 0
const actions = {
  increment: state => state + 1,
  decrement: state => state - 1
}

const Counter = createStore({
  actions,
  model
})

// This will render 10 rather than 0
const StartFrom10 = () => (
  <Counter.Provider initialState={10}>
    <Counter.Consumer>{state => state}</Counter.Consumer>
  </Counter.Provider>
)
```