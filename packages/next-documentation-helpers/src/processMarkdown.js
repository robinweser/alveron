import { serialize } from 'next-mdx-remote/serialize'
import breaks from 'remark-breaks'
import gfm from 'remark-gfm'

export default async function processMarkdown(content) {
  return await serialize(content, {
    mdxOptions: {
      remarkPlugins: [breaks, gfm],
    },
  })
}
