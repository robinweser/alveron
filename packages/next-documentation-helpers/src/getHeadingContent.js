import { arrayMap } from 'fast-loops'

function getNodeText(node) {
  if (node.type === 'text') {
    return node.value
  }

  return ''
}

export default function getHeadingContent(children) {
  return arrayMap(children, getNodeText)
}
