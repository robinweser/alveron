export default function persistence({ key, getStorage, actions, onHydrated }) {
  function middleware(nextState, { action }) {
    if (actions && Array.isArray(actions) && !actions.includes(action)) {
      return nextState
    }

    const storage = getStorage()

    if (storage) {
      try {
        storage.setItem(key, JSON.stringify(nextState))
      } catch (e) {}
    }

    return nextState
  }

  function effect(setState) {
    const storage = getStorage()

    if (storage) {
      const data = storage.getItem(key)

      if (data) {
        try {
          setState(JSON.parse(data))
        } catch (e) {}
      }
    }

    if (onHydrated) {
      onHydrated()
    }
  }

  return {
    middleware,
    effect,
  }
}
