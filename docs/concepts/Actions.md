# Actions

Actions are used to update the state in a functional way.<br>
They are so called **reducers** that receive both the current state and some payload and return the new state. While it doesn't enforce any restrictions on how to calculate the new state, here are some recommendations:

* Do not mutate the current state, but rather use **immutable data structures**
* Ensure that all actions are **pure functions**
* All actions should have a **single responsibility**
  
#### Pure Functions

A pure function should:
  * always return the same output for given input
  * not manipulate the input
  * not cause side effects (e.g. API calls)

#### Unidirectional Data Flow
Given that the only way to update the state is calling a action, we always have an unidirectional data flow.<br>
Calling actions will automatically update the state and rerender all consuming components to ensure predictable and up-to-date output.
