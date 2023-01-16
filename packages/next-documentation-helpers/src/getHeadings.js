import { arrayReduce } from 'fast-loops'
import { fromMarkdown as parseMarkdown } from 'mdast-util-from-markdown'

import getHeadingId from './getHeadingId'
import getHeadingContent from './getHeadingContent'

const defaultConfig = {
  minDepth: 2,
  maxDepth: 4,
}

export default function getHeadings(markdown, customConfig = {}) {
  const config = {
    ...defaultConfig,
    ...customConfig,
  }

  const { minDepth, maxDepth } = config

  const ast = parseMarkdown(markdown)

  return arrayReduce(
    ast.children,
    (headings, child) => {
      if (
        child.type === 'heading' &&
        child.depth >= minDepth &&
        child.depth <= maxDepth
      ) {
        const content = getHeadingContent(child.children)

        headings.push({
          id: getHeadingId(content.join('-')),
          children: content.join(' '),
          depth: child.depth,
        })
      }

      return headings
    },
    []
  )
}
