import { promises as fs } from 'fs'
import { join } from 'path'
import { arrayReduce, arrayMap } from 'fast-loops'

import processMarkdown from '../utils/processMarkdown'
import getHeadingId from '../utils/getHeadingId'

import { fromMarkdown as parseMarkdown } from 'mdast-util-from-markdown'

const DIR_PATH = join(process.cwd(), 'docs/')

function getNodeText(node) {
  if (node.type === 'text') {
    return node.value
  }

  return ''
}

function getHeadingContent(children) {
  return arrayMap(children, getNodeText)
}

function getHeadings(ast) {
  return arrayReduce(
    ast.children,
    (headings, child) => {
      if (child.type === 'heading' && child.depth > 1) {
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

export default async function getPageDetails(id, preview = false) {
  const markdown = await fs.readFile(join(DIR_PATH, id + '.mdx'), 'utf-8')
  const content = await processMarkdown(markdown)

  const ast = parseMarkdown(markdown)
  const headings = getHeadings(ast)

  return {
    content,
    headings,
  }
}
