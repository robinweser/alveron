export default function middlewareFactory(storage, key) {
  return function middleware(nextState) {
    if (storage) {
      try {
        storage.setItem(key, JSON.stringify(nextState))
      } catch (e) {}
    }

    return nextState
  }
}
