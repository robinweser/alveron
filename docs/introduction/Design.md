# Design Principles

## State is read-only
> This principle is inspired by [Redux](https://redux.js.org/introduction/threeprinciples) and is basically a rewritten copy of their documentation. 

**The only way to change the state is by calling [actions](../concepts/Actions.md)**.<br>
A action is a function that reduces the previous state and a payload to the next state.

This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they use predefined actions to ensure predictable state changes. 

## Actions are pure functions
As mentioned above, in order to update the state, actions are called with an optional payload.<br>
Those actions follow the reducer-pattern as they reduce the current state and the payload to the next state. While we can't enforce pure reducers, it's highly recommended and for your own good.<br>
Check the [actions](../concepts/Actions.md) documentation to learn what a pure function is.

## Effects must call actions to update the state
Performing side effects, such as API calls, can be done using [effects](../concepts/Effects.md). They can neither access the state nor update the state directly, but they can call actions at any time.<br>
That's a fundamental decision in order to keep side effects as simple and stupid as possible. Actions should be single source of truth in terms of state updates.<br>
If an effect needs information from the state, we can still pass it down via payload explicitely. Yet, it is highly discouraged to pass the whole state.