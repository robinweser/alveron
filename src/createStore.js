/* @flow */
import React, { createContext, Component } from 'react'

import validateStore from './validateStore'

type InterfaceShape = {
  Consumer: any,
  Provider: any,
}

type OptionsType = {
  model?: any,
  actions?: Object,
}

export default function createStore(
  options: OptionsShape = {}
): InterfaceShape {
  const Store = createContext()

  const actions = options.actions || {}
  const effects = options.effects || {}

  return {
    Provider: class Provider extends Component {
      state: {
        state: any,
        actions: Object,
      }

      constructor(props, context) {
        super(props, context)

        const initialState = props.initialState || options.model
        const resolvedActions = Object.keys(actions).reduce((map, name) => {
          map[name] = (...payload) =>
            this.setState(prevState => ({
              state: actions[name](prevState.state, ...payload),
            }))

          return map
        }, {})

        const setState = this.setState.bind(this)
        const resolvedEffects = Object.keys(effects).reduce((map, name) => {
          map[name] = (...payload) =>
            effects[name](
              reducer =>
                setState(prevState => ({ state: reducer(prevState.state) })),
              ...payload
            )
          return map
        }, {})

        this.state = {
          state: initialState,
          actions: resolvedActions,
          effects: resolvedEffects,
        }
      }

      render() {
        return (
          <Store.Provider value={this.state}>
            {this.props.children}
          </Store.Provider>
        )
      }
    },

    Consumer: ({ children }) => (
      <Store.Consumer>
        {store =>
          validateStore(store) &&
          children(store.state, store.actions, store.effects)
        }
      </Store.Consumer>
    ),
  }
}
