# Performance

## shouldComponentUpdate
By default, every [Consumer](../api/Consumer.md) component in a given [Provider](../api/Provider.md) scope will update if its state changes.

That means, only the affected Consumer actually update, which is a neat advantage over e.g. [Redux](redux.js.org).<br>
Yet, we still don't need to update every Consumer all the time e.g. if we only consume parts of the state. To achieve that, we can implement shouldComponentUpdate within our consuming React components.

> **Note**: In general, there's no need for such low level optimisations, but sometimes it might help to improve performance e.g. for big lists.


#### Example
Consider the following example where a generic Input component uses the store to select the correct key.
```javascript
import React from 'react'
import { createStore } from 'react-woodworm'

const model = {
  firstname: '',
  lastname: ''
}

const actions = {
  update: (state, change) => ({
    ...state,
    ...change
  })
}

const User = createStore({
  model,
  actions
})

const Input = ({ field }) => (
  <User.Consumer>
    ({ state, actions }) => (
      <input value={state[field]} onChange={e => actions.update({
        [field]: e.target.value
      })} />
    )
  </User.Consumer>
)


const UserInfo = () => (
  <User.Provider>
    <Input field="firstname" />
    <Input field="lastname" />
  </User.Provider>
)
```

Whenever we type in one of the input fields, both Input components are updated and will rerender. It's not a huge deal as React doesn't actuallly trigger DOM updates if the render output doesn't change, but still the render method could be expensive.

Let's rebuild the same example but using `shouldComponentUpdate` this time.

> We left out the first lines as they won't change anyways.

```javascript
class PureInput extends Component {
  shouldComponentUpdate(nextProps) {
    const { field, state } = this.props

    // we only update if the field value changes
    return (
      state[field] !== nextProps.state[field]
    )
  }

  render() {
    const { state, actions } = this.props

    const value = state[field]
    const onChange = e => actions.update({
      [field]: e.target.value
    })

    return (
      <input value={value} onChange={onChange} />
    )
  }
}

const Input = ({ field }) => (
  <User.Consumer>
    {({ state, actions }) => (
      <PureInput field={field} state={state} actions={actions} />
    )}
  </User.Consumer>
)


const UserInfo = () => (
  <User.Provider>
    <Input field="firstname" />
    <Input field="lastname" />
  </User.Provider>
)
```

Now we will only rerender the input component that is actually updated.

## Batch Updates
tbd.

---

### Related
* [React - API Reference: shouldComponentUpdate](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)
* [React - Advanced Guides: Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html)

### Tools
**[shallow-equal](https://github.com/moroshko/shallow-equal)**<br>Minimalistic shallow equality check for arrays/objects