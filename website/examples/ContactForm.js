import * as React from 'react'
import { useStore } from 'alveron'

import { Box } from 'kilvin'

import Button from '../components/examples/Button'
import Input from '../components/examples/Input'

const model = {
  loading: false,
  error: null,
  firstName: '',
  lastName: '',
  email: '',
}

const sendForm = (data, onSuccess, onError) =>
  setTimeout(() => {
    if (data.firstName && data.lastName && data.email) {
      alert('Success!')
      onSuccess()
    } else {
      onError('Data missing!')
    }
  }, 2000)

const actions = {
  setFirstName: (state, firstName) => [
    {
      ...state,
      firstName,
    },
  ],
  setLastName: (state, lastName) => [
    {
      ...state,
      lastName,
    },
  ],
  setEmail: (state, email) => [
    {
      ...state,
      email,
    },
  ],
  submitForm: (state, data) => [
    {
      ...state,
      loading: true,
    },
    (actions) => sendForm(data, actions.onSuccess, actions.onError),
  ],
  onError: (state, error) => [
    {
      ...state,
      loading: false,
      error,
    },
  ],
  onSuccess: (state) => [model],
}

export default function ContactForm() {
  const [state, { setFirstName, setLastName, setEmail, submitForm }] = useStore(
    actions,
    model
  )
  const [delay, setDelay] = React.useState(500)

  return (
    <Box space={8}>
      <Box space={4}>
        <Input
          placeholder="First name"
          value={state.firstName}
          onChange={setFirstName}
        />
        <Input
          placeholder="Last name"
          value={state.lastName}
          onChange={setLastName}
        />
        <Input placeholder="E-mail" value={state.email} onChange={setEmail} />
      </Box>
      {state.error && <Box extend={{ color: 'red' }}>{state.error}</Box>}
      <Button
        loading={state.loading}
        action={() =>
          submitForm({
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
          })
        }>
        Submit
      </Button>
    </Box>
  )
}
