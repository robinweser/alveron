import * as React from 'react'
import { useStore } from 'alveron'

import { Box } from 'kilvin'

import Button from '../components/Button'
import Input from '../components/Input'

function getStore() {
  const model = {
    loading: false,
    error: false,
    firstName: '',
    lastName: '',
    email: '',
  }

  const actions = {
    reset: () => model,
    setLoading: (state, loading) => ({
      ...state,
      loading,
    }),
    setError: (state, error) => ({
      ...state,
      error,
    }),
    setFirstName: (state, firstName) => ({
      ...state,
      firstName,
    }),
    setLastName: (state, lastName) => ({
      ...state,
      lastName,
    }),
    setEmail: (state, email) => ({
      ...state,
      email,
    }),
  }

  const effects = {
    submitForm: (actions, effects, data) => {
      actions.setLoading(true)

      setTimeout(() => {
        if (data.firstName && data.lastName && data.email) {
          alert('Success!')
          actions.reset()
        } else {
          actions.setError('Data missing!')
        }

        actions.setLoading(false)
      }, 2000)
    },
  }

  return {
    model,
    actions,
    effects,
  }
}

export default function ContactForm() {
  const { state, actions, effects } = useStore(getStore())
  const [delay, setDelay] = React.useState(500)

  return (
    <Box space={8}>
      <Box space={4}>
        <Input
          placeholder="First name"
          value={state.firstName}
          onChange={actions.setFirstName}
        />
        <Input
          placeholder="Last name"
          value={state.lastName}
          onChange={actions.setLastName}
        />
        <Input
          placeholder="E-mail"
          value={state.email}
          onChange={actions.setEmail}
        />
      </Box>
      {state.error && <Box extend={{ color: 'red' }}>{state.error}</Box>}
      <Button
        loading={state.loading}
        action={() =>
          effects.submitForm({
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
