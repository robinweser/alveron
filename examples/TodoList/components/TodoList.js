import React, { Component } from 'react'
import { createStore } from 'alveron'

let id = 0
const model = []

const actions = {
  addTodo: (state, todo) => [...state, todo],
  removeTodo: (state, todoId) => state.filter(todo => todo.id !== todoId),
  toggleTodo: (state, todoId) =>
    state.map(
      todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ),
  removeAll: () => [],
  checkAll: state =>
    state.map(todo => ({
      ...todo,
      completed: true,
    })),
  uncheckAll: state =>
    state.map(todo => ({
      ...todo,
      completed: false,
    })),
}

const { Wrapper } = createStore({
  model,
  actions,
})

export default class extends Component {
  state = { newTodo: '' }

  onChange = e =>
    this.setState({
      newTodo: e.target.value,
    })

  reset = () => this.setState({ newTodo: '' })

  render() {
    return (
      <Wrapper>
        {({ state, actions }) => {
          const hasUncompletedTodos = state.find(
            todo => todo.completed === false
          )

          return (
            <div>
              <input onChange={this.onChange} value={this.state.newTodo} />
              <button
                onClick={() => {
                  actions.addTodo({
                    id: ++id,
                    title: this.state.newTodo,
                    completed: false,
                  })
                  this.reset()
                }}>
                Add
              </button>
              <br />
              <br />
              {state.length > 0 ? (
                <div>
                  <button
                    onClick={
                      hasUncompletedTodos
                        ? actions.checkAll
                        : actions.uncheckAll
                    }>
                    {hasUncompletedTodos ? 'Check all' : 'Uncheck all'}
                  </button>
                  <button onClick={actions.removeAll}>Remove all</button>
                  <div style={{ width: 300 }}>
                    {state.map(todo => (
                      <TodoListItem
                        key={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        removeTodo={() => actions.removeTodo(todo.id)}
                        toggleTodo={() => actions.toggleTodo(todo.id)}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  No Todos yet.
                  <br />
                  Go and add one!
                </div>
              )}
            </div>
          )
        }}
      </Wrapper>
    )
  }
}

const TodoListItem = ({ title, completed, toggleTodo, removeTodo }) => (
  <div style={{ borderBottom: '1px solid grey', padding: 10 }}>
    <input
      type="checkbox"
      onChange={toggleTodo}
      checked={completed}
      style={{ float: 'left' }}
    />
    <div style={{ width: 200, float: 'left' }}>{title}</div>
    <button onClick={removeTodo}>Remove</button>
  </div>
)
