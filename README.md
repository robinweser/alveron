# react-woodworm

Just like a woodworm, react-woodworm is super lightweight at **only 1kb gzipped**.<br>
It uses React's new context feature and therefore requires React 16.3 or higher.

<img alt="TravisCI" src="https://travis-ci.org/rofrischmann/react-woodworm.svg?branch=master"> <a href="https://codeclimate.com/github/rofrischmann/react-woodworm/coverage"><img alt="Test Coverage" src="https://codeclimate.com/github/rofrischmann/react-woodworm/badges/coverage.svg"></a> <img alt="npm downloads" src="https://img.shields.io/npm/dm/react-woodworm.svg"> <img alt="gzipped size" src="https://img.shields.io/bundlephobia/minzip/react-woodworm.svg?colorB=4c1&label=gzipped%20size"> <img alt="npm version" src="https://badge.fury.io/js/react-woodworm.svg">

## Support Me
If you're using [Robin Frischmann](https://rofrischmann.de)'s packages, please consider supporting his [Open Source Work](https://github.com/rofrischmann) on [**Patreon**](https://www.patreon.com/rofrischmann).

## Installation
```sh
# yarn
yarn add react-woodworm

# npm
npm i --save react-woodworm
```
> **Caution**: It requires `^react@16.3.0` to be present.

## Why
Within React applications, I frequently want to share and update some state without having to pass it down the whole component tree.<br>
Usually you would go with something like Redux, but I dislike the idea to use Redux for small things like showing/hiding a modal. In general, I prefer using Redux **only** for business logic.<br>
With React's new context API, we get an encapsulated way to share state throughout the whole component tree without having to pass it down and since React 16.3 it even ships a lightweight render-props based component API instead of `contextTypes`, `childContextTypes` and `getChildContext`.

## How
Every time we create a store using react-woodworm, it internally uses React's `createContext` API to create a Consumer and Provider component. The Provider is then wrapped with a custom Provider component to automatically bind every `action` to its own `setState`.

## Caveats
Right now, every Provider creates its own store. Therefore you cannot use it in multiple places to share the same state. In order to achieve that, you would have to wrap your root component to use it everywhere.

## API

### createStore

Creates a new Provider-Consumer pair given some actions and a state model.<br>
It takes a single options object as parameter that can be configured as described below.

#### Options
| Name | Type | Description |
| --- | --- | --- |
| actions | *(Object?)* | *(optional)* a map of actions to modify the state.<br>Actions have the signature `(prevState, payload) => newState` |
| effects | *(Object?)* | *(optional)* a map of (async) side effects that alter the state.<br>Effects have the signature `(setState, payload) => setState(prevState => newState)`
| model | *(any?)* | *(optional)* the initial state shape |

#### Returns
An object containing both the `Provider` and the `Consumer` components.

### Provider

The Provider component that must wrap all inner Consumer in order to correctly pass and update the state.<br>

#### Props
| Name | Type | Description |
| --- | --- | --- |
| initialState | *(Object?)* | *(optional)* per-Provider initialState that overwrites the default model |

### Consumer

The Consumer component that is used to render something based on the current state and actions.<br>
It requires `children` to be a function that receives `state` and `actions` as parameters.


## Example
```javascript
import React from 'react'
import { createStore } from 'react-woodworm'

const model = 0
const actions = {
  increment: prevState => prevState + 1,
  decrement: prevState => prevState - 1,
}

// It also supports async side effects
// this is useful if you e.g. do API calls
const effects = {
  resetAsync: setState => setTimeout(
    () => setState(() => 0),
    1000
  )
}

const { Provider, Consumer } = createStore({
  model,
  actions,
  effects
})

const Counter = () => (
  <Provider>
    <Consumer>
      {(state, actions, effects) => (
        <div>
          Count: {state}
          <button onClick={actions.increment}>+</button>
          <button onClick={actions.decrement}>-</button>
          <button onClick={effects.resetAsync}>Reset after 1 second</button>
        </div>
      )}
    </Consumer>
  </Provider>
)
```

## License
react-woodworm is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de).




