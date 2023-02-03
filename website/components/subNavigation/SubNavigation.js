import * as React from 'react'
import { arrayMap } from 'fast-loops'

import SubNavItem from './SubNavItem'

export default function SubNavigation({ children }) {
  return arrayMap(children, (props) => <SubNavItem key={props.id} {...props} />)
}
