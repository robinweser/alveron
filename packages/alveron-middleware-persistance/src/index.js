import middlewareFactory from './middleware'
import usePersistanceFactory from './usePersistance'

export default function createPersistance(storage, key) {
  const usePersistance = usePersistanceFactory(storage, key)
  const middleware = middlewareFactory(storage, key)

  return {
    middleware,
    usePersistance,
  }
}
