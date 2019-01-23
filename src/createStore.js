/* @flow */
import React, { createContext, Component } from 'react'

import validateStore from './validateStore'

import type { OptionsShape, InterfaceShape, RenderPropsShape } from '../types'

export default function createStore(
  options: OptionsShape = {}
): RenderPropsShape {
  const Store = createContext()

  const actions = options.actions || {}
  const effects = options.effects || {}

  class Provider extends Component {
    state: InterfaceShape

    props: {
      initialState: any,
      children: any,
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
          effects[name](resolvedActions, resolvedEffects, ...payload)
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
  }

  const Consumer = ({ children }) => (
    <Store.Consumer>
      {store => validateStore(store) && children(store)}
    </Store.Consumer>
  )

  const Wrapper = ({ children, initialState }) => (
    <Provider initialState={initialState}>
      <Consumer>{children}</Consumer>
    </Provider>
  )

  return {
    Provider,
    Consumer,
    Wrapper,
  }
}
