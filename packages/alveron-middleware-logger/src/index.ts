import { Middleware, MiddlewareContext } from 'alveron'

type Config = {
  prefix?: string
}

const defaultConfig = {
  prefix: 'ALVERON:',
}
export default function logger(userConfig: Config = {}): Middleware {
  const config = {
    ...defaultConfig,
    ...userConfig,
  }

  function middleware(
    nextState: any,
    { action, payload, prevState }: MiddlewareContext
  ) {
    console.log(config.prefix + action, {
      payload,
      prevState,
      nextState,
    })

    return nextState
  }

  return {
    middleware,
  }
}
