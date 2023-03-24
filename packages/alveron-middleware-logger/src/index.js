export default function logger() {
  function middleware(nextState, { action, payload, prevState }) {
    console.log('ALVERON: ' + action, {
      payload,
      prevState,
      nextState,
    })

    return nextState
  }

  return {
    middleware,
  }
}
