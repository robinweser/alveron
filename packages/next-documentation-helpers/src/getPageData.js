import { promises as fs } from 'fs'
import { join } from 'path'
import { arrayReduce, arrayMap } from 'fast-loops'

import processMarkdown from './processMarkdown'
import getHeadingId from './getHeadingId'
import getHeadings from './getHeadings'

export default async function getPageData(rootPath, id, config = {}) {
  const markdown = await fs.readFile(join(rootPath, id + '.mdx'), 'utf-8')

  const content = await processMarkdown(markdown)
  const headings = getHeadings(markdown, config)

  return {
    content,
    headings,
  }
}
