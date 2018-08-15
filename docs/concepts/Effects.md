# Effects

Apart from [actions](Actions.md), there is another way to update the state: (side) effects.<br>
Effects do not actually update the state directly, but rather call an equivalent action once resolved.

```javascript
const Effect: void = (actions: Object, ...payload) => {}
```

They're used for asynchronous operations such as API requests or delayed calls.<br>
For example, sending an API request to get some user data will not immediately yield an answer. The server must first receive the call, process it and send an answer over the network which unfortunately takes some time.<br>

Yet we learned, that [actions](Actions.md) shouldn't cause side effects and be predictable in their output. That's where effects fill the gap. When an effect is called, it e.g. sends the API requests, waits for the answer, and then calls an action with the received data once.