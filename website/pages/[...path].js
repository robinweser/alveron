import * as React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { Box } from 'kilvin'

import getAllPages from '../api/getAllPages'
import getPageDetails from '../api/getPageDetails'
import Layout from '../components/Layout'

import * as components from '../components/Markdown'
import Counter from '../examples/Counter'
import ContactForm from '../examples/ContactForm'

const year = new Date().getFullYear()

export default function Page({ id, content, headings, path }) {
  return (
    <>
      <Layout headings={headings}>
        <MDXRemote
          {...content}
          components={{
            ...components,
            Counter,
            ContactForm,
            Box,
          }}
        />
      </Layout>
      <Box
        paddingTop={20}
        paddingBottom={20}
        extend={{ backgroundColor: 'rgb(240, 240, 240)' }}>
        <Box maxWidth={1300} width="100%" margin="0 auto">
          Crafted with ♡ by Robin Weser
        </Box>
      </Box>
    </>
  )
}

export async function getStaticPaths() {
  const pages = await getAllPages()

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

  const { content, headings } = await getPageDetails(id)

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
