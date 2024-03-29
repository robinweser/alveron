import * as React from 'react'
import { useStore } from 'alveron'

import { Box } from 'kilvin'

import Button from '../components/examples/Button'
import Input from '../components/examples/Input'

const model = {
  input: '',
  todos: [],
}

const actions = {
  setInput: (state, input) => [
    {
      ...state,
      input,
    },
  ],
  addTodo: (state, text) => [
    {
      ...state,
      input: '',
      todos: [
        ...state.todos,
        {
          text,
          checked: false,
        },
      ],
    },
  ],
  toggleTodo: (state, id) => [
    {
      ...state,
      todos: state.todos.map((todo, index) => {
        if (index === id) {
          return {
            ...todo,
            checked: !todo.checked,
          }
        }

        return todo
      }),
    },
  ],
  removeTodo: (state, id) => [
    {
      ...state,
      todos: [...state.todos.slice(0, id), ...state.todos.slice(id + 1)],
    },
  ],
}

function TodoItem({ id, text, checked, toggle, remove }) {
  return (
    <Box space={2} direction="row" alignItems="center">
      <input
        type="checkbox"
        value={checked}
        checked={checked}
        onChange={toggle}
      />
      <Box>{text}</Box>
      <Button action={remove}>Remove</Button>
    </Box>
  )
}

export default function TodoList() {
  const [state, { setInput, addTodo, toggleTodo, removeTodo }] = useStore(
    actions,
    model
  )

  return (
    <Box space={8}>
      <Box space={4} direction="row">
        <Input
          placeholder="e.g. Try Alveron"
          value={state.input}
          onChange={setInput}
        />
        <Button action={() => addTodo(state.input)}>Add</Button>
      </Box>
      <Box space={4}>
        {state.todos.map((todo, index) => (
          <TodoItem
            key={todo.text + index}
            {...todo}
            toggle={() => toggleTodo(index)}
            remove={() => removeTodo(index)}
          />
        ))}
      </Box>
    </Box>
  )
}
