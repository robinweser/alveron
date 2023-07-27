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

    let parsedData
    if (storage) {
      const data = storage.getItem(key)

      if (data) {
        try {
          parsedData = JSON.parse(data)
          setState(parsedData)
        } catch (e) {}
      }
    }

    if (onHydrated) {
      onHydrated(parsedData)
    }
  }

  return {
    middleware,
    effect,
  }
}
