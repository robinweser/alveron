import * as React from 'react'

import { Box } from 'kilvin'

export default function Input({ value, onChange, placeholder }) {
  return (
    <Box
      as="input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      padding={4}
      minWidth={50}
      extend={{
        fontSize: 16,
        borderRadius: 7,
        appearance: 'none',
        border: '1px solid rgb(180, 180, 180)',
      }}
    />
  )
}
