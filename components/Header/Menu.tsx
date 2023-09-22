import { HStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const menu = [
  {
    name: 'Earn',
    path: '/earn',
  },
  {
    name: 'Swap',
    path: '/swap?fromChain=neutron&toChain=osmosis&fromToken=NTRN&toToken=OSMO',
  },
]

type ItemProps = {
  name: string
  path: string
  onClick?: () => void
}

export const Item = ({ name, path, onClick }: ItemProps) => {
  return (
    <Link
      as={NextLink}
      variant="link"
      href={path}
      fontSize="md"
      lineHeight="30px"
      letterSpacing="1px"
      onClick={onClick}
      color="blue"
    >
      {name}
    </Link>
  )
}

const Menu = () => {
  return (
    <HStack spacing={8}>
      {menu.map((item) => (
        <Item key={item.name} name={item.name} path={item.path} />
      ))}
    </HStack>
  )
}

export default Menu
