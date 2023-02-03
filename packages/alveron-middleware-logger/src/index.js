export default function middleware() {
  return function logger(nextState, { action, payload, prevState }) {
    console.log('ALVERON: ' + action, {
      payload,
      prevState,
      nextState,
    })

    return nextState
  }
}
