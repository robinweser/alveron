# Alveron

> **Disclaimer**: Alveron was formerly published as **react-woodworm**. It was renamed in order to replace the previous [alveron](https://github.com/rofrischmann/alveron-old) package. The old react-woodworm version 4.0 is now published as alveron version 2.0. Sorry for the inconvenience.

Alveron is an [Elm](http://elm-lang.org)-inspired state management library for React support asynchronous effects by default.<br>It uses React's new context API and is super lightweight at **only 1kb gzipped**.

It can handle both **local** [component state](https://reactjs.org/docs/faq-state.html) as well as **global** state.

<img alt="TravisCI" src="https://travis-ci.org/rofrischmann/alveron.svg?branch=master"> <a href="https://codeclimate.com/github/rofrischmann/alveron/coverage"><img alt="Test Coverage" src="https://codeclimate.com/github/rofrischmann/alveron/badges/coverage.svg"></a> <img alt="npm downloads" src="https://img.shields.io/npm/dm/alveron.svg"> <img alt="gzipped size" src="https://img.shields.io/bundlephobia/minzip/alveron.svg?colorB=4c1&label=gzipped%20size"> <img alt="npm version" src="https://badge.fury.io/js/alveron.svg">

## Support Me
If you're using [Robin Frischmann](https://rofrischmann.de)'s packages, please consider supporting his [Open Source Work](https://github.com/rofrischmann) on [**Patreon**](https://www.patreon.com/rofrischmann).

## Installation
```sh
# yarn
yarn add alveron

# npm
npm i --save alveron
```
> **Caution**: It requires `^react@16.3.0` to be present.

## Documentation

> We recommend starting with [Why](https://alveron.js.org/docs/introduction/Motivation.html) and [How](https://alveron.js.org/docs/introduction/How.html) to understand why Alveron exists and how it works.

* [Introduction](https://alveron.js.org/docs/Introduction.html)
* [Concepts](https://alveron.js.org/docs/Concepts.html)
* [Advanced](https://alveron.js.org/docs/Advanced.html)
* [API Reference](https://alveron.js.org/docs/API.html)

## [Examples](https://alveron.js.org/docs/introduction/Examples.html)
* [Counter](./examples/Counter)
* [TodoList](./examples/TodoList)
* [Async API](./examples/AsyncAPI)

## The Gist
```javascript
import React from 'react'
import { createStore } from 'alveron'

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

## Users
- [weser.io](https://weser.io)
- [Zeit](http://zeit.co)

## License
Alveron is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de).
