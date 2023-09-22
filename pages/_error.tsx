import Page from '@/components/Error'
import { NextPageContext } from 'next'
import Head from 'next/head'

interface Props {
  statusCode: number
}

const Error = ({ statusCode }: Props) => {
  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <Page isError message={statusCode.toString()} />
    </>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return { statusCode }
}

export default Error
