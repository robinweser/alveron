import { Middleware, MiddlewareContext } from 'alveron'

type Config<T> = {
  key: string
  getStorage: () => Storage
  actions?: Array<string>
  onHydrated?: (data?: T) => void
}
export default function persistence<T>({
  key,
  getStorage,
  actions,
  onHydrated,
}: Config<T>): Middleware {
  function middleware(nextState: any, { action }: MiddlewareContext) {
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

  function effect(setState: any) {
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
