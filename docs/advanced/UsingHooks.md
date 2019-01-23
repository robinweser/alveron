# Using Hooks

> **Warning**: Using the hooks API requires react **@16.7.0-alpha.1** or **@16.7.0-alpha.2**. Note that hooks are still experimental and subject to change.

Since version 3.0.0, Alveron also provides the [useAlveron](../api/useAlveron.md) hook which provides the similar functionality compared to [createStore](../api/createStore.md) which uses the render-props pattern.    
Thanks to the [useEffect]() hook, using Alveron effects could not be any simpler. We don't have to wrap our component with a class component just to call an effect e.g. when mounting.

## Basic Usage
The basic usage example is probably the Counter component which is also used in the examples and throughout the documentation. Here's how that'd be implemented using hooks.

```javascript
import { useAlveron } from 'alveron'

const store = {
  model: 0,
  actions: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
}

function Counter() {
  const { state, actions } = useAlveron(store)

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={actions.increment}>+</button>
      <button onClick={actions.decrement}>-</button>
    </div>
  )
}
```

## Effects
Now let's see how we can use effects together with the [useEffect]() hook. A simple example would be fetching some data. We want to show a loading spinner as long as it runs and immediately trigger the effect on mounting.

We're going to use the [JSON Placerholder REST API](https://jsonplaceholder.typicode.com) to fetch a mocked todo item.

```javascript
import { useEffect } from 'react'
import { useAlveron } from 'alveron'

const store = {
  model: {
    data: undefined,
    error: undefined,
    loading: false
  },
  actions: {
    setLoading = (state, loading) => ({
      ...state,
      loading
    }),
    setError = (state, error) => ({
      ...state,
      error
    }),
    setData = (state, data) => ({
      ...state,
      data
    })
  },
  effects: {
    fetchData: actions => {
      // make sure the loading spinner shows up
      actions.setLoading(true)

      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(json => {
          if (!json) {
            actions.setError(/* some error */)
          }

          actions.setData(json)
        })
        .catch(actions.setError)
        // make sure the loading is set to false whatever happens above
        .finally(() => actions.setLoading(false))
    }
  }
}


function Counter() {
  const { state, actions, effects } = useAlveron(store)

  // using the empty array to only fetch once when mounting
  useEffect(effects.fetchData, [])

  const { loading, error, data } = state 

  if (loading) return <div>LOADING</div>
  if (error) return <div>ERROR</div>

  return (
    <div>
      {JSON.stringify(data)}
      <button onClick={effects.fetchData}>Refetch</button>
    </div>
  )
}
```

## Global State
tbd.