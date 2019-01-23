# useAlveron


> **Note**: Using the hooks API requires react **@16.7.0-alpha.1** or **@16.7.0-alpha.2**.


The [createStore](createStore.md) equivalent using the [React hooks API](https://reactjs.org/docs/hooks-intro.html).    
It uses [useState](https://reactjs.org/docs/hooks-state.html) under the hood and can be considered just a small abstraction layer over basic hooks.    

It accepts the same options and returns the same interface. 

## Options
| Argument | Type | Description |
| -------- | ---- | ----------- |
| actions | *(Object?)* | A map of [actions](../concepts/Actions.md) where the *key* represents the action name and the *value* represents the action reducer |
| effects | *(Object?)* | A map of [effects](../concepts/Effects.md) where the *key* represents the effect name and the *value* represents the updater |
| model | *(any?)* | The default [model](../concepts/Model.md) reflecting the initial state shape |

## Returns
*(Object)* an object containing the state, actions and effects to be used inside a React component.

## Example
```javascript
import { useAlveron } from 'alveron'

const model = 0
const actions = {
  increment: state => state + 1,
  decrement: state => state - 1
}

function Counter() {
  const { state, actions } = useAlveron({ 
    model, 
    actions 
  })

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
```