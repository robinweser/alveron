# react-woodworm

> Spread your state down the tree - like a woodworm!

Just like a woodworm, react-woodworm is super lightweight at only xxxkb.<br>
It uses React's new context feature and therefore requires React 16.3 or higher.

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

## Example
```javascript
import React from 'react'
import { createStore } from 'react-woodworm'

const model = 0
const actions = {
  increment: prevState => prevState + 1,
  decrement: prevState => prevState - 1
}

const { Provider, Consumer } = createStore(model, actions)

const Counter = () => (
  <Provider>
    <Consumer>
      {(state, actions) => (
        <div>
          Count: {state}
          <button onClick={actions.increment}>+</button>
          <button onClick={actions.decrement}>-</button>
        </div>
      )}
    </Consumer>
  </Provider>
)
```

## API
Coming soon.

## License
react-woodworm is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de).




