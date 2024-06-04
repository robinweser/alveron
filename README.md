# Alveron

Alveron is a tiny (~0.8kb) [Elm](http://elm-lang.org)-inspired state management library for React with support asynchronous effects by default.</br>
It's built on top of React's built-in hooks `useState` and `useOptimistic`.

<img alt="npm version" src="https://badge.fury.io/js/alveron.svg"> <img alt="npm downloads" src="https://img.shields.io/npm/dm/alveron.svg"> <a href="https://bundlephobia.com/result?p=alveron@latest"><img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/alveron.svg"></a>

## Installation

```sh
# npm
npm i --save alveron
# yarn
yarn add alveron
# pnpm
pnpm add alveron
```

> **Caution**: Alveron requires `^react@16.3.0` to be present. If you want to use the optimstic APIs it even requires `^react@19.0.0`.

## Documentation

Documentation is hosted on https://alveron.js.org

> We recommend starting with [Motivation](https://alveron.js.org/intro/motivation) and [Theoretical Background](https://alveron.js.org/intro/theoretical-background) to understand why Alveron exists and how it works.

- [Introduction](https://alveron.js.org/docs/Introduction.html)
- [Concepts](https://alveron.js.org/docs/Concepts.html)
- [Advanced](https://alveron.js.org/docs/Advanced.html)
- [API Reference](https://alveron.js.org/docs/API.html)

## Examples

- [Counter](https://alveron.js.org/examples/counter)
- [Todo List](https://alveron.js.org/examples/todo-list)
- [Contact Form](https://alveron.js.org/examples/contact-form)

## The Gist

```tsx
import React from 'react'
// alternatively we can useOptimsticStore wrapping useOptimistic under the hood
import { useStore } from 'alveron'

type Model = number

// Actions return a tuple containing the new state and an optional effect
const actions = {
  increment: (state: Model) => [state + 1],
  incrementBy: (state: Model, increment: number) => [state + increment],
  reset: () => [model],
  resetAfter: (state: Model, duration: number) => [
    state,
    (actions) => setTimeout(actions.reset, duration),
  ],
}

function Counter() {
  const [state, { increment, decrement, incrementBy, resetAfter }] = useStore(actions, 0)

  return (
    <div>
      Count: {state}
      <button onClick={() => increment()}>+</button>
      <button onClick={() => incrementBy(2)}>+2</button>
      <button onClick={() => resetAfter(1000)}>Reset after 1 second</button>
    </div>
  )
}
```

## Users

- [dm-drogerie markt](https://dm.de)
- [weser.io](https://weser.io)
- [Zeit](http://zeit.co)

## License

Alveron is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de).
