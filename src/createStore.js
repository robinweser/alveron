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
  effects?: Object,
}

export default function createStore(
  options: OptionsShape = {}
): InterfaceShape {
  const Store = createContext()

  const actions = options.actions || {}
  const effects = options.effects || {}

  return {
    Provider: class Provider extends Component {
      static defaultProps = {
        middleware: [],
      }

      state: {
        state: any,
        actions: Object,
        effects: Object,
      }

      constructor(props, context) {
        super(props, context)

        const initialState = props.initialState || options.model
        const resolvedActions = Object.keys(actions).reduce((map, name) => {
          map[name] = (...payload) =>
            this.setState(prevState => ({
              state: this._resolveState(
                actions[name](prevState.state, ...payload)
              ),
            }))

          return map
        }, {})

        const update = this.setState.bind(this)
        const resolvedEffects = Object.keys(effects).reduce((map, name) => {
          map[name] = (...payload) =>
            effects[name](
              reducer =>
                update(prevState => ({
                  state: this._resolveState(reducer(prevState.state)),
                })),
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

      _resolveState = newState => {
        if (this.props.middleware.length === 0) {
          return newState
        }

        return this.props.middleware.reduce(
          (finalState, middleware) => middleware(finalState),
          newState
        )
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
