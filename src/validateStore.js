/* @flow */
export default function validateStore(store: any) {
  if (store === undefined) {
    throw Error(
      'You need to wrap your <Consumer> components with the <Provider> component provided by createStore().'
    )
  }

  return true
}
