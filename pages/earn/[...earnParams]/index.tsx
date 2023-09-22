import React from 'react'
import { useRouter } from 'next/router'
import VaultById from '@/components/VaultById'
import Validator from '@/components/Validator'

const Element: Record<string, React.FC<{ id: string }>> = {
  vault: VaultById,
  validator: Validator,
}

const Index: React.FC = () => {
  const router = useRouter()
  const { earnParams } = router.query
  const [earnType, id] = Array.isArray(earnParams) ? earnParams : []
  const Component = Element[earnType]

  if (!Component) {
    return null
  }

  return <Component id={id} />
}

export default Index
