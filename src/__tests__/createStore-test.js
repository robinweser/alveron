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
      model: {
        foo: 1,
        bar: 'bar',
        baz: {
          foobar: 5,
        },
      },
    })

    const tree = TestRenderer.create(
      <Provider>
        <Consumer>
          {({ state }) => <div>{JSON.stringify(state, null, 2)}</div>}
        </Consumer>
      </Provider>
    )

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('should render the initial state passed to the Provider', () => {
    const { Provider, Consumer } = createStore({
      model: {
        foo: 1,
        bar: 'bar',
        baz: {
          foobar: 5,
        },
      },
    })

    const tree = TestRenderer.create(
      <Provider initialState={{ foo: 5 }}>
        <Consumer>
          {({ state }) => <div>{JSON.stringify(state, null, 2)}</div>}
        </Consumer>
      </Provider>
    )

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('should render the updated state', () => {
    const { Provider, Consumer } = createStore({
      model: {
        foo: 1,
        bar: 'bar',
        baz: {
          foobar: 5,
        },
      },
      actions: {
        update: (state, payload) => ({ ...state, foo: payload }),
      },
    })

    const tree = TestRenderer.create(
      <Provider>
        <Consumer>
          {({ state, actions }) => (
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

  it('should support multiple arguments on actions', () => {
    const { Provider, Consumer } = createStore({
      model: 0,
      actions: {
        increment(state, stepper = 1, additionalStepper = 0) {
          return state + stepper + additionalStepper
        },
      },
    })

    const tree = TestRenderer.create(
      <Provider>
        <Consumer>
          {({ state, actions }) => (
            <div>
              <div>{JSON.stringify(state, null, 2)}</div>
              <button onClick={() => actions.increment(5, 2)}>Increment</button>
            </div>
          )}
        </Consumer>
      </Provider>
    )

    tree.root.findByType('button').props.onClick()

    expect(tree.getInstance().state.state).toBe(7)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('should support async actions', done => {
    const { Provider, Consumer } = createStore({
      model: 10,
      actions: {
        update: state => state + 1,
        reset: () => 10,
      },
      effects: {
        resetAsync: actions => setTimeout(actions.reset, 1000),
      },
    })

    const tree = TestRenderer.create(
      <Provider>
        <Consumer>
          {({ state, actions, effects }) => (
            <div>
              <div>{state}</div>
              <button id="update" onClick={actions.update}>
                Update
              </button>
              <button id="reset" onClick={effects.resetAsync}>
                Reset After 1 second
              </button>
            </div>
          )}
        </Consumer>
      </Provider>
    )

    tree.root.findByProps({ id: 'update' }).props.onClick()
    expect(tree.toJSON()).toMatchSnapshot()

    tree.root.findByProps({ id: 'reset' }).props.onClick() // should reset to zero after 1sec

    setTimeout(() => {
      expect(tree.toJSON()).toMatchSnapshot()
      done()
    }, 1001)
  })

  it('should create a separate store for every Provider instance', () => {
    const { Provider, Consumer } = createStore({
      model: 0,
      actions: {
        increment: state => state + 1,
      },
    })

    const Counter = () => (
      <Provider>
        <Consumer>
          {({ state, actions }) => (
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

  it('should pipe state updates through middleware', () => {
    const { Provider, Consumer } = createStore({
      model: 0,
      actions: {
        increment: state => state + 1,
      },
    })

    const ghostIncrement = state => state + 1

    const tree = TestRenderer.create(
      <Provider middleware={[ghostIncrement]}>
        <Consumer>
          {({ state, actions }) => (
            <div>
              <div>{state}</div>
              <button onClick={actions.increment}>Update</button>
            </div>
          )}
        </Consumer>
      </Provider>
    )

    tree.root.findByType('button').props.onClick()
    tree.root.findByType('button').props.onClick()
    tree.root.findByType('button').props.onClick()
    tree.root.findByType('button').props.onClick()

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('should correctly pass context to middleware', () => {
    const { Provider, Consumer } = createStore({
      model: 0,
      actions: {
        increment: state => state + 1,
        decrement: state => state - 1,
        incrementBy: (state, step) => state + step,
      },
    })

    const cache = []
    const contextCache = (state, context) => {
      cache.push({ ...context, nextState: state })
      return state
    }

    const tree = TestRenderer.create(
      <Provider middleware={[contextCache]}>
        <Consumer>
          {({ state, actions }) => (
            <div>
              <div>{state}</div>
              <button id="increment" onClick={actions.increment}>
                +
              </button>
              <button id="incrementBy2" onClick={() => actions.incrementBy(2)}>
                +
              </button>
              <button id="decrement" onClick={actions.decrement}>
                -
              </button>
            </div>
          )}
        </Consumer>
      </Provider>
    )

    tree.root.findByProps({ id: 'increment' }).props.onClick()
    tree.root.findByProps({ id: 'decrement' }).props.onClick()
    tree.root.findByProps({ id: 'incrementBy2' }).props.onClick()

    expect(tree.toJSON()).toMatchSnapshot()
    expect(cache).toMatchSnapshot()
  })
})
