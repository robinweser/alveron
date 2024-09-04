import { useState } from 'react'

import useStoreFactory, { Middleware } from './useStoreFactory.js'

export default function useStoreWithMiddleware<Model>(
  middleware: Array<Middleware<Model>> = []
) {
  return useStoreFactory<Model>(useState<Model>)(middleware)
}
