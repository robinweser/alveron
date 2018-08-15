# Caveats

####  1. Unique Store Instances

[createStore](../api/createStore.md) doesn't actually create a store directly, but rather create a factory by providing the [Provider](../api/Provider.md) component.<br>
Every Provider component therefore manages its own state object, that is derived from the store model and the passed initialState.<br>
Thus, having multiple Provider will lead to multiple store instances that both have separate state. The [Consumer](../api/Consumer.md) component will always interact with the closest wrapping Provider.<br>
In order to have a single global store instance, wrap your root component with the Provider component and use the Consumer whereever you'd like to access that global store.