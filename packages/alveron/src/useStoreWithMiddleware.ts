import { useState } from 'react'

import useStoreFactory, { Middleware } from './useStoreFactory'

export default function useStoreWithMiddleware<Model>(
  middleware: Array<Middleware<Model>> = []
) {
  return useStoreFactory<Model>(useState<Model>)(middleware)
}
