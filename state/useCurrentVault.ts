import { VaultResult } from '@/services/vault'
import { create } from 'zustand'

export type CurrentVault = Partial<VaultResult> & {
  isLoading?: boolean
}

interface CurrentVaultState {
  currentVault: CurrentVault
  setCurrentVault: (currentVault: CurrentVault) => void
}

const useCurrentVault = create<CurrentVaultState>((set) => ({
  currentVault: {
    isLoading: true,
  },
  setCurrentVault: (currentVault) => set(() => ({ currentVault })),
}))

export default useCurrentVault
