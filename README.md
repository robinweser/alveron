# react-woodworm

Woodworm is an [Elm](http://elm-lang.org)-inspired state management library for React support asynchronous effects by default.<br>It uses React's new context API and is super lightweight at **only 1kb gzipped**.

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

## Documentation

* [Introduction](https://react-woodworm.js.org/Introduction.html)
* [Concepts](https://react-woodworm.js.org/Concepts.html)
* [Examples](https://react-woodworm.js.org/Examples.html)
* [API Reference](https://react-woodworm.js.org/API.html)

## The Gist
```javascript
import React from 'react'
import { createStore } from 'react-woodworm'

const model = 0
const actions = {
  increment: prevState => prevState + 1,
  decrement: prevState => prevState - 1,
  reset: () => model
}

// It also supports async side effects
// this is useful if you e.g. do API calls
const effects = {
  resetAsync: actions => setTimeout(
    actions.reset,
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
      {({ state, actions, effects }) => (
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
