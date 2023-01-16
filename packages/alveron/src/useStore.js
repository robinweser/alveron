import { useState } from 'react'
import { objectReduce, arrayReduce } from 'fast-loops'

export default function useStore({ model, actions = {}, middleware = [] }) {
  const [state, setState] = useState(model)

  const resolvedActions = objectReduce(
    actions,
    (resolved, action, name) => ({
      ...resolved,
      [name]: (...payload) =>
        setState((prevState) => {
          const [newState, effect] = action(prevState, ...payload)

          if (effect && typeof effect === 'function') {
            effect(resolvedActions)
          }

          return arrayReduce(
            middleware,
            (newState, middleware) =>
              middleware(newState, { action: name, payload, prevState }),
            newState
          )
        }),
    }),
    {}
  )

  return {
    state,
    actions: resolvedActions,
  }
}
