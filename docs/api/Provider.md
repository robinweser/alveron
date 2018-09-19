# Provider

The Provider component keeps an instance of the store and provides it to all nested [Consumer](Consumer.md) components.

## Props
| Property | Type | Description |
| -------- | ---- | ----------- |
| initialState |*(any?)* | An initial state unique to this Provider instance. It overwrites the global model. |

## Example
```javascript
import { createStore } from 'alveron'

const model = 0
const actions = {
  increment: state => state + 1,
  decrement: state => state - 1
}

const { Provider } = createStore({
  actions,
  model
})

const Counter = () => (
  <Provider>
    ...
  </Provider>
)
```

#### Using initialState

The following example with start the counter from 10 instead of 0.

```javascript
const StartFrom10 = () => (
  <Provider initialState={10}>
    ...
  </Provider>
)
```