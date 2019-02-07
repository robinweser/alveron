type Action = (state: any, ...payload: Array<any>) => any
type ActionMap = {
  [actionName: string]: Action,
}
type ResolvedAction = (...payload: Array<any>) => void
type ResolvedActionMap = {
  [actionName: string]: ResolvedAction,
}

type Effect = (
  actions: ResolvedActionMap,
  effects: ResolvedEffectMap,
  ...payload: Array<any>
) => void
type EffectMap = {
  [effectName: string]: Effect,
}
type ResolvedEffect = (...payload: Array<any>) => void
type ResolvedEffectMap = {
  [effectName: string]: ResolvedEffect,
}

export interface OptionsShape {
  model?: any,
  actions?: ActionMap,
  effects?: EffectMap,
}

export interface InterfaceShape {
  state: any,
  actions: ResolvedActionMap,
  effects: ResolvedEffectMap,
}

export interface RenderPropsShape {
  Consumer: any,
  Provider: any,
  Wrapper: any,
}

declare const createStore: (options: OptionsShape) => RenderPropsShape
declare const useAlveron: (options: OptionsShape) => InterfaceShape
