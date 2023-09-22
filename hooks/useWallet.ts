import { useChain, useWallet as useWalletKit } from '@cosmos-kit/react'
import useCurrentVault from '@/state/useCurrentVault'
import { useMemo } from 'react'
import { useRouter } from 'next/router'

const useWallet = () => {
  const { currentVault } = useCurrentVault()
  const { status } = useWalletKit()
  const { query } = useRouter()
  const isWalletConnected = status === 'Connected'
  const { earnParams } = query
  const [earnType, chain] = Array.isArray(earnParams) ? earnParams : []

  const chainName = useMemo(() => {
    if (!!query.fromChain) return query.fromChain as string
    else if (!!chain) return chain
    else if (!!currentVault?.chainName) return currentVault?.chainName
    return 'neutron'
  }, [query.fromChain || currentVault?.chainName, chain])

  const chainInfo = useChain(chainName)

  return {
    ...chainInfo,
    isWalletConnected: chainInfo?.isWalletConnected || isWalletConnected,
  }
}

export default useWallet
