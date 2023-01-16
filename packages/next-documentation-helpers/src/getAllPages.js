import { promises as fs } from 'fs'
import { join } from 'path'

import { arrayEach, arrayFilter, arrayReduce } from 'fast-loops'

async function getFiles(path, prefix = '') {
  const items = await fs.readdir(path, { withFileTypes: true })

  const folders = arrayFilter(items, (item) => item.isDirectory())
  const files = arrayReduce(
    items,
    (files, item) => {
      if (!item.isDirectory()) {
        files.push(prefix + item.name.replace('.mdx', ''))
      }

      return files
    },
    []
  )

  for (const folder of folders) {
    const subFiles = await getFiles(path + folder.name + '/', folder.name + '/')

    files.push(...subFiles)
  }

  return files
}

export default async function getAllPages(rootPath) {
  return await getFiles(rootPath)
}
