import {
  Box,
  Heading,
  ListItem,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  UnorderedList
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
    <Stack spacing={4}>
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

      <Heading size="md">Wallet issues on earn page</Heading>

      <Box p="5" bg="red.300" borderRadius="md">
        <UnorderedList>
          <ListItem>On first connect, even though we are approving 3 chains, it still ask for approval on terra and juno again, and wallet status is coming as disconnected that is causing connect button to show </ListItem>
          <ListItem>Once all of the chains are apporved its looks smooth in this demo, however after deploying to vercel we noticed that it disconnects randomly</ListItem>
          <ListItem>Try clearing connected website on kepler and refresh the page to reproduce.</ListItem>
        </UnorderedList>
      </Box>

    </Stack>
  )
}

export default Earn