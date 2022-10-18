import * as React from 'react'

import { Box } from 'kilvin'

export default function Button({ action, children, loading }) {
  return (
    <Box
      as="button"
      onClick={action}
      disabled={loading}
      padding={4}
      minWidth={70}
      width="min-content"
      extend={{
        whiteSpace: 'nowrap',
        fontSize: 16,
        borderRadius: 7,
        backgroundColor: 'blue',
        color: 'white',
        appearance: 'none',
        cursor: 'pointer',
        border: 0,
        ':disabled': {
          backgroundColor: 'grey',
          cursor: 'not-allowed',
        },
      }}>
      {loading ? 'Loading' : children}
    </Box>
  )
}
