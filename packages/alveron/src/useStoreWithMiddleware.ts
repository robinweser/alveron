import { useEffect, useState } from 'react'

type MiddlewareContext = {
  action: string
  payload: any
  prevState: any
}

export type Middleware<Model> = {
  middleware: (newState: Model, context: MiddlewareContext) => any
  effect?: (setState: any) => void
}

export type Effect<Actions, Context = any> = (
  actions: ResolvedActions<Actions>,
  context?: Context
) => void
export type Action<Actions, M, P extends any[] = [], Context = any> = (
  state: M,
  ...payload: P
) => [M, Effect<Actions, Context>?]
type Actions<ActionMap> = {
  [Property in keyof ActionMap]: ActionMap[Property]
}

type Args<T> = T extends (state: any, ...args: infer Args) => any ? Args : never

type ResolvedAction<P extends any[]> = (...payload: P) => void
export type ResolvedActions<Actions> = {
  [Parameter in keyof Actions]: ResolvedAction<Args<Actions[Parameter]>>
}

export default function useStoreWithMiddleware<ActionMap, M>(
  middleware: Array<Middleware<M>> = []
) {
  return function useStore<ActionMap, Model extends M, Context = any>(
    actions: Actions<ActionMap>,
    defaultState: Model,
    context?: Context
  ): [Model, ResolvedActions<ActionMap>] {
    const [state, setState] = useState<Model>(defaultState)

    useEffect(
      () => middleware.forEach(({ effect }) => effect && effect(setState)),
      []
    )

    type ActionNames = keyof ActionMap
    const actionNames = Object.keys(actions) as Array<ActionNames>

    const resolvedActions = actionNames.reduce(
      (resolved: ResolvedActions<ActionMap>, name: ActionNames) => {
        const action = actions[name] as (
          state: Model,
          ...payload: any[]
        ) => [
          newState: Model,
          effect: (
            actions: ResolvedActions<ActionMap>,
            context?: Context
          ) => void
        ]

        resolved[name] = (...payload) =>
          setState((prevState: Model) => {
            const result = action(prevState, ...payload)

            // safety checks for a more convenient DX
            if (!Array.isArray(result)) {
              throw Error(
                `Wrong format returned from action ("${name.toString()}"). Expected a tuple of [newState, effect], but got ${typeof result}. Make sure to wrap your state with an additional array. See https://alveron.js.org/concepts/action`
              )
            }

            const [newState, effect, ...rest] = result

            // safety checks for a more convenient DX
            if (rest.length > 0) {
              throw Error(
                `Too many values return from an action ("${name.toString()}"). Expected a tuple of [newState, effect]. If your state is an array, make sure to wrap it with an additional array when you return it. See https://alveron.js.org/concepts/action`
              )
            }

            if (effect && typeof effect === 'function') {
              effect(resolvedActions, context)
            }

            return middleware.reduce(
              (newState, { middleware }) =>
                middleware(newState, {
                  action: name.toString(),
                  payload,
                  prevState,
                }),
              newState
            )
          })

        return resolved
      },
      {} as ResolvedActions<ActionMap>
    )

    return [state, resolvedActions]
  }
}
