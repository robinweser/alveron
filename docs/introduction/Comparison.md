# Comparison

This section should help to understand the differences to other (React based) state management libraries.

### Table of Contents
* [Redux](#redux)
* [Constate](#constate)

## [Redux](https://github.com/reduxjs/redux)

> Talking about Redux, we're actually refering to its React bindings ([react-redux](https://github.com/reduxjs/react-redux)) as Alveron is React-only anyways.

To be done.


## [Constate](https://github.com/diegohaz/constate)
Constate builds on-top of the very same API than Alveron does: React Context. Therefore it shares a lot of concepts and ideas.<br>
Compared to Alveron, it has a bit more complicated API as it ships way more explicit props. With Alveron you only set the [model](../concepts/Model.md), [actions](../concepts/Actions.md) and [effects](../concepts/Effects.md) and handle all the rendering logic and lifecycle methods yourself.<br>
With Constate on the other hand, you e.g. have APIs to directly handle state changes on component (un)mount and update. It also ships selectors out-of-the-box while with Alveron you'd have to add that yourself.<br>
In contrast to Constate, Alveron is always distinct. Equivocality can occur when multiple Container share the same context, but set different initialState values. In this case, Constate will only consider the initialState of the first Container.<br>

**To sum it up**: Alveron is less opinionated and more focused on the state management only while Constate gives you way more APIs to handle all kind of use cases ou-of-the-box.