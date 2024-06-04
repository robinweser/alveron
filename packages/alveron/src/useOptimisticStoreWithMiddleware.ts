import { useOptimistic } from 'react'

import useStoreFactory, { Middleware } from './useStoreFactory'

export default function useOptimisticStoreWithMiddleware<Model>(
  middleware: Array<Middleware<Model>> = []
) {
  const useState = (initialState: Model) =>
    useOptimistic(initialState, (_: Model, update: Model) => update)

  return useStoreFactory<Model>(useState)(middleware)
}
