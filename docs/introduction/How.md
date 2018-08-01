# How It Works

Woodworm is entirely built on React's build-in [Context API].<br>
Creating a new store instance using [createStore](../api/createStore.md) will use React's [createContext]() to create a local context store returning two components: Provider and Consumer.<br>
Woodworm wraps those components in order to automatically bind the [model](../concepts/Model.md), [actions](../concepts/Actions.md) and [effects](../concepts/Effects.md) to its local React state.