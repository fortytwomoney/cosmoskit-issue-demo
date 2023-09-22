import ConnectButton from '@/components/ConnectButton'
import { HStack } from '@chakra-ui/react'
import Menu from './Menu'

const Header = () => {
  return (
    <HStack justifyContent="space-between">
      <Menu />
      <ConnectButton />
    </HStack>
  )
}

export default Header
