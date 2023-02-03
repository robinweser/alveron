import { useState, useEffect } from 'react'

export default function usePersistanceFactory(storage, key) {
  return function usePersistance(fallback) {
    const [data, setData] = useState(fallback)
    const [hydrated, setHydrated] = useState(false)

    useEffect(() => {
      if (storage) {
        const persistedData = storage.getItem(key)

        if (persistedData) {
          try {
            setData(JSON.parse(persistedData))
          } catch (e) {}
        }
      }

      setHydrated(true)
    }, [])

    return [data, hydrated]
  }
}
