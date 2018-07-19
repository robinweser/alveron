import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Simulate } from 'react-dom/test-utils'

import createStore from '../createStore'

describe('Creating a store', () => {
  it('should return a Consumer and a Provider', () => {
    const store = createStore()

    expect(Object.keys(store)).toEqual(['Provider', 'Consumer'])
  })
})

describe('Rendering the <Consumer>', () => {
  it('should throw without the <Provider>', () => {
    const { Provider, Consumer } = createStore()

    const render = () =>
      TestRenderer.create(<Consumer>{store => null}</Consumer>)

    expect(render).toThrow()
  })

  it('should render the initial state', () => {
    const { Provider, Consumer } = createStore({
      foo: 1,
      bar: 'bar',
      baz: {
        foobar: 5,
      },
    })

    const tree = TestRenderer.create(
      <Provider>
        <Consumer>
          {state => <div>{JSON.stringify(state, null, 2)}</div>}
        </Consumer>
      </Provider>
    )

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('should render the updated state', () => {
    const { Provider, Consumer } = createStore(
      {
        foo: 1,
        bar: 'bar',
        baz: {
          foobar: 5,
        },
      },
      {
        update: (state, payload) => Object.assign({}, state, { foo: payload }),
      }
    )

    const tree = TestRenderer.create(
      <Provider>
        <Consumer>
          {(state, actions) => (
            <div>
              <div>{JSON.stringify(state, null, 2)}</div>
              <button onClick={() => actions.update(10)}>Update</button>
            </div>
          )}
        </Consumer>
      </Provider>
    )

    tree.root.findByType('button').props.onClick()

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('should create a separate store for every Provider instance', () => {
    const { Provider, Consumer } = createStore(0, {
      increment: state => state + 1,
    })

    const Counter = () => (
      <Provider>
        <Consumer>
          {(state, actions) => (
            <div>
              <div>Count: {state}</div>
              <button onClick={actions.increment}>+</button>
            </div>
          )}
        </Consumer>
      </Provider>
    )
    const tree = TestRenderer.create(
      <div>
        <Counter />
        <Counter />
      </div>
    )

    tree.root.findAllByType('button')[0].props.onClick()

    expect(tree.toJSON()).toMatchSnapshot()
  })
})
