// exporting Value so that the consumer can import it to see what are the allowed values since TS doesn't expand types by default when viewing it in the IDE
export type Value = string | boolean | number | { [key: string]: Value } | Array<Value>

export type Model = {
  [modelProperty: string]: Value
}
type State = {
  [stateProperty: string]: Value
}

type Action = (state: State, ...payload: Array<State>) => [State, Effect]
export type ActionMap = {
  [actionName: string]: Action
}
type ResolvedAction = (...payload: Array<State>) => void
type ResolvedActionMap = {
  [actionName: string]: ResolvedAction
}

type Effect = (
  actions: ResolvedActionMap
) => void

export type Store = [State, ResolvedActionMap]

declare const useStore: (actions?: ActionMap, model?: Model) => Store
