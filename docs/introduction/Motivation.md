# Motivation

Within React applications, I frequently want to share and update some state without having to pass it down the whole component tree.<br>
Usually you would go with something like [Redux](https://redux.js.org) or [MobX](https://github.com/mobxjs/mobx), but I dislike the idea to use those for small things like showing/hiding a modal. In general, I prefer using those **only** for business logic.<br>
With React's new [Context API](https://reactjs.org/docs/context.html), we get an encapsulated way to share state throughout the whole child component tree without having to pass it down and since React 16.3 it even ships a lightweight render-props based component API instead of using the old declarative API.