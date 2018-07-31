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
        listeners: [],
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
            this.setState(prevState => {
              const newState = actions[name](prevState.state, ...payload)
              this._emitChange(newState)
              return {
                state: newState,
              }
            })

          return map
        }, {})

        const update = this.setState.bind(this)
        const resolvedEffects = Object.keys(effects).reduce((map, name) => {
          map[name] = (...payload) =>
            effects[name](
              reducer =>
                update(prevState => {
                  const newState = reducer(prevState.state)
                  this._emitChange(newState)
                  return {
                    state: newState,
                  }
                }),
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

      _emitChange = newState => {
        this.props.listeners.forEach(listener => listener(newState))
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
