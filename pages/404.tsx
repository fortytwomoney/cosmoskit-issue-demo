import React from 'react'

import Page from '@/components/Error'
import { NextPage } from 'next'
import Head from 'next/head'

const Custom404Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <Page isError={true} message="Page not found" />
    </>
  )
}

export default Custom404Page
