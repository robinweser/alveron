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
                actions[name](prevState.state, ...payload),
                {
                  action: name,
                  previousState: prevState.state,
                  payload: [...payload],
                }
              ),
            }))

          return map
        }, {})

        const resolvedEffects = Object.keys(effects).reduce((map, name) => {
          map[name] = (...payload) => effects[name](resolvedActions, ...payload)
          return map
        }, {})

        this.state = {
          state: initialState,
          actions: resolvedActions,
          effects: resolvedEffects,
        }
      }

      _resolveState = (state: any, context: Object): any => {
        return this.props.middleware.reduce(
          (finalState, middleware) => middleware(finalState, context),
          state
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
        {store => validateStore(store) && children(store)}
      </Store.Consumer>
    ),
  }
}
