import { useEffect, useState } from 'react'
import { objectReduce, arrayReduce } from 'fast-loops'

export default function useStoreWithMiddlware(middleware = []) {
  return function useStore(actions = {}, model) {
    const [state, setState] = useState(model)

    // force update state on model change
    useEffect(() => setState(model), [model])

    const resolvedActions = objectReduce(
      actions,
      (resolved, action, name) => ({
        ...resolved,
        [name]: (...payload) =>
          setState((prevState) => {
            const result = action(prevState, ...payload)

            // safety checks for a more convenient DX
            if (!Array.isArray(result)) {
              throw Error(
                `Wrong format returned from action ("${name}"). Expected a tuple of [newState, effect], but got ${typeof result}. Make sure to wrap your state with an additional array. See https://alveron.js.org/concepts/action`
              )
            }

            const [newState, effect, ...rest] = result

            // safety checks for a more convenient DX
            if (rest.length > 0) {
              throw Error(
                `Too many values return from an action ("${name}"). Expected a tuple of [newState, effect]. If your state is an array, make sure to wrap it with an additional array when you return it. See https://alveron.js.org/concepts/action`
              )
            }

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

    return [state, resolvedActions]
  }
}
