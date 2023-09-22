import walletChains from '@/config/walletChains.json'
import { truncate } from '@/helpers/truncate'
import useWallet from '@/hooks/useWallet'
import { Button } from '@chakra-ui/react'
import { useWalletClient } from '@cosmos-kit/react'
import { chains } from 'chain-registry'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'

type DisconnectButtonProps = {
  address: string | undefined
  onDisconnect: () => void
}

const DisconnectButton = ({ address, onDisconnect }: DisconnectButtonProps) => {
  return (
    <Button
      colorScheme='orange'
      fontSize={['xs', 'sm']}
      onClick={onDisconnect}
      textTransform="unset"
    >
      Disconnect ({address})
    </Button>
  )
}

const getChainByName = (name: string) => {
  return chains.find((chain) => chain.chain_name === name)
}

const ConnectButton = () => {
  const { connect, disconnect, isWalletConnected, address, chain } = useWallet()
  const { client } = useWalletClient()
  const { query } = useRouter()

  const handleConnect = async () => {
    if (isWalletConnected) {
      disconnect()
    } else {
      connect()
    }
  }

  useEffect(() => {
    if (client) {
      const selectedChain = getChainByName(query.formChain as string)
      if (selectedChain) {
        walletChains.push(selectedChain.chain_id)
      }
      client.enable?.(walletChains)
    }
  }, [client, query.formChain])

  const shortAddress = useMemo(
    () => truncate(address, chain.bech32_prefix),
    [address, chain.bech32_prefix],
  )

  if (isWalletConnected)
    return <DisconnectButton address={shortAddress} onDisconnect={disconnect} />

  return (
    <Button colorScheme='blue' fontSize={['xs', 'sm']} onClick={handleConnect}>
      {isWalletConnected ? 'Disconnect' : 'Connect Wallet'}
    </Button>
  )
}

export default ConnectButton
