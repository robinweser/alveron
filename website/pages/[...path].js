import * as React from 'react'
import { join, dirname } from 'path'
import { getAllPages, getPageData } from 'next-documentation-helpers'

import { Box } from 'kilvin'

import Template from '../components/Template'
import Layout from '../components/Layout'

import * as components from '../components/markdown/Markdown'

import Counter from '../examples/Counter'
import ContactForm from '../examples/ContactForm'
import TodoList, from '../examples/TodoList'

import config from '../config'
import { MDXRemote } from 'next-mdx-remote'

export default function Page({ id, content, headings, path }) {

  return (
    <Template>
      <Layout headings={headings}>
        <MDXRemote
          {...content}
          components={{
            ...components,
            Box,
            Counter,
            ContactForm,
            TodoList,
          }}
        />
      </Layout>
    </Template>
  )
}

const ROOT_PATH = join(process.cwd(), config.pageRoot)

export async function getStaticPaths() {
  const pages = await getAllPages(ROOT_PATH)

  return {
    fallback: false,
    paths: pages.map((page) => ({
      params: {
        path: page.split('/'),
      },
    })),
  }
}

export async function getStaticProps({ params }) {
  const id = params.path.join('/')

  const { content, headings } = await getPageData(ROOT_PATH, id)

  if (!content) {
    return {
      notFound: true,
      revalidate: 60,
    }
  }

  return {
    props: {
      id,
      path: params.path,
      content,
      headings,
    },
    revalidate: 60,
  }
}
