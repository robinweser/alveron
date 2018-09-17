import React from 'react'
import { createStore } from 'alveron'

let id = 11

function getRandomName() {
  const firstName = [
    'John',
    'Max',
    'Marc',
    'Lisa',
    'Tim',
    'James',
    'Sarah',
    'Maria',
    'Jessica',
    'Sophie',
    'Carina',
  ]

  const lastName = [
    'Doe',
    'Bay',
    'Potter',
    'Parker',
    'Twain',
    'Baker',
    'Smith',
    'Cook',
  ]

  const first = firstName[Math.round(Math.random() * firstName.length)]
  const last = lastName[Math.round(Math.random() * lastName.length)]

  return {
    firstName: first,
    lastName: last,
    name: first + ' ' + last,
    id: ++id,
  }
}

const model = {
  users: [],
}

const actions = {
  setUsers: (state, users) => ({
    users,
  }),
  addUser: (state, user) => ({
    users: [...state.users, user],
  }),
  removeUser: (state, userId) => ({
    users: state.users.filter(user => user.id !== userId),
  }),
}

const effects = {
  fetchUsers: actions =>
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => actions.setUsers(json)),
  addUser: actions =>
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(getRandomName()),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => actions.addUser(json)),
  removeUser: (actions, userId) =>
    fetch('https://jsonplaceholder.typicode.com/users/' + userId, {
      method: 'DELETE',
    }).then(() => actions.removeUser(userId)),
}

const { Wrapper } = createStore({
  model,
  actions,
  effects,
})

export default () => (
  <Wrapper>
    {({ state, actions, effects }) => (
      <div style={{ width: 300 }}>
        <button onClick={effects.fetchUsers}>Fetch Users</button>
        <button onClick={effects.addUser}>Add Random User</button>
        {state.users.length === 0 ? (
          <div>
            No users yet.
            <br />
            Try to fetch first.
          </div>
        ) : (
          state.users.map(user => (
            <UserListItem
              name={user.name}
              removeUser={() => effects.removeUser(user.id)}
            />
          ))
        )}
      </div>
    )}
  </Wrapper>
)

const UserListItem = ({ name, removeUser }) => (
  <div style={{ borderBottom: '1px solid grey', padding: 10 }}>
    <div style={{ width: 200, float: 'left' }}>{name}</div>
    <button onClick={removeUser}>Delete</button>
  </div>
)
