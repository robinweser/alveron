/* @flow */
// $FlowFixMe
import { useState, useEffect } from 'react'

import type { OptionsShape, InterfaceShape } from '../types'

function useAlveron({
  model,
  actions = {},
  effects = {},
}: OptionsShape): InterfaceShape {
  const [state, setState] = useState(model)

  const resolvedActions = Object.keys(actions).reduce((resolved, action) => {
    resolved[action] = (...payload) =>
      setState(oldState => actions[action](oldState, ...payload))

    return resolved
  }, {})

  const resolvedEffects = Object.keys(effects).reduce((resolved, effect) => {
    resolved[effect] = (...payload) =>
      effects[effect](resolvedActions, resolvedEffects, ...payload)
    return resolved
  }, {})

  return {
    state,
    actions: resolvedActions,
    effects: resolvedEffects,
  }
}
