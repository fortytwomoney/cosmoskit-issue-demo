import {
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

type Props = {}

const vaults = [
  {
    name: "vault1",
    chain: "neutron"
  },
  {
    name: "vault2",
    chain: "juno"
  },
  {
    name: "vault3",
    chain: "terra2"
  }
]

const Earn = (props: Props) => {

  const router = useRouter()

  const handleRowClick = (chain: string) => {
    router.push(`/earn/vault/${chain}`)
  }

  return (
    <Stack spacing={10}>
      <TableContainer>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>Vault</Th>
              <Th>Chain</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              vaults.map((vault) => {
                return (
                  <Tr
                    key={vault.name}
                    _hover={{ bg: 'gray.100' }}
                    cursor='pointer'
                    onClick={() => handleRowClick(vault.chain)}
                  >
                    <Td>{vault.name}</Td>
                    <Td>{vault.chain}</Td>
                  </Tr>
                )
              })
            }
          </Tbody>
        </Table>
      </TableContainer>

      <Stack borderRadius="md" bg="gray.200" p="5">
        <Heading size="sm">Issue Description:</Heading>
        <Text>
          On first connect, even though we are approving 3 chains, it still ask for approval on terra and juno again, and wallet status is coming as disconnected that is causing connect button to show. Once all of the chains are apporved its looks smooth in this demo, however after deploying to vercel we noticed that it disconnects randomly
          Try clearing connected website on kepler and refresh the page to reproduce.
        </Text>

        <Heading size="sm">Steps to reproduce:</Heading>
        <OrderedList>
          <ListItem>Connect to keplr</ListItem>
          <ListItem>Remove connections to the app inside keplr >Settings>Security&privacy</ListItem>
          <ListItem>Refresh page</ListItem>
          <ListItem>Approve new connection</ListItem>
          <ListItem>Click one of the Table rows with vault x</ListItem>
          <ListItem>See the wallet disconnect</ListItem>
        </OrderedList>
      </Stack>

    </Stack>
  )
}

export default Earn