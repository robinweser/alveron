import { useState } from 'react'
import { objectReduce, arrayReduce } from 'fast-loops'

export default function useStore({
  model,
  actions = {},
  effects = {},
  middleware = [],
}) {
  const [state, setState] = useState(model)

  const resolvedActions = objectReduce(
    actions,
    (resolved, action, name) => ({
      ...resolved,
      [name]: (...payload) =>
        setState((prevState) => {
          const newState = action(prevState, ...payload)

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

  const resolvedEffects = objectReduce(
    effects,
    (resolved, effect, name) => ({
      ...resolved,
      [name]: (...payload) =>
        effect(resolvedActions, resolvedEffects, ...payload),
    }),
    {}
  )

  return {
    state,
    actions: resolvedActions,
    effects: resolvedEffects,
  }
}
