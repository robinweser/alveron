import { Middleware, MiddlewareContext } from 'alveron'

type SyntheticStorage<T = any> = {
  getItem: (key: string) => Promise<T>
  setItem: (key: string, value: T) => void
}
type Config<T> = {
  key: string
  getStorage: () => Storage | SyntheticStorage
  actions?: Array<string>
  onHydrated?: (data?: T) => void
  encode?: (data?: T) => any
  decode?: (data: any) => T
}

export default function persistence<T>({
  key,
  getStorage,
  actions,
  onHydrated,
  encode = JSON.stringify,
  decode = JSON.parse,
}: Config<T>): Middleware {
  function middleware(nextState: any, { action }: MiddlewareContext) {
    if (actions && Array.isArray(actions) && !actions.includes(action)) {
      return nextState
    }

    const storage = getStorage()

    if (storage) {
      try {
        storage.setItem(key, encode(nextState))
      } catch (e) {}
    }

    return nextState
  }

  function effect(setState: any) {
    const storage = getStorage()

    if (storage) {
      const isAsync = storage.getItem.constructor.name === 'AsyncFunction'

      async function getData() {
        if (isAsync) {
          return await storage.getItem(key)
        } else {
          return storage.getItem(key)
        }
      }

      async function hydrate() {
        const data = await getData()

        let parsedData
        if (data) {
          try {
            parsedData = decode(data)
            setState(parsedData)
          } catch (e) {}
        }

        if (onHydrated) {
          onHydrated(parsedData)
        }
      }

      hydrate()
    }
  }

  return {
    middleware,
    effect,
  }
}
