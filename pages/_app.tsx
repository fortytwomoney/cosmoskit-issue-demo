import Layout from '@/components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { wallets as keplrWallets } from '@cosmos-kit/keplr'
import { ChainProvider } from '@cosmos-kit/react'
import { assets, chains } from 'chain-registry'

import type { AppProps } from 'next/app'

// Import this in your top-level route/layout
import '@interchain-ui/react/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={[
          ...keplrWallets,
        ]}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChainProvider>
    </ChakraProvider>
  )
}
