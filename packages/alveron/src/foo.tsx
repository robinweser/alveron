import { useState } from 'react'
import useStoreFactory, {
  ActionReturn,
  Effect,
  ResolvedActions,
} from './useStoreFactory'
import useStore from './useStore'
import useStoreWithMiddleware from './useStoreWithMiddleware'
import useOptimisticStore from './useOptimisticStore'
import useOptimisticStoreWithMiddleware from './useOptimisticStoreWithMiddleware'

type Model = {
  foo: string
  bar?: string
}

function Component() {
  const [s, setState] = useState<Model>({ foo: 'foo' })

  function addBar(state: Model, foo: string): ActionReturn<typeof a, Model> {
    return [{ ...state, foo }, (actions) => actions.changeFoo(foo)]
  }

  const a = {
    addBar,
    changeFoo: (state: Model, foo: string) => [
      { ...state, foo, baz: 'basd' },
      (actions: any) => actions.addBar(),
    ],
  }

  const [state, actions] = useOptimisticStoreWithMiddleware([])(a, s)

  actions.addBar('foo')
  actions.changeFoo('foo')

  return null
}
