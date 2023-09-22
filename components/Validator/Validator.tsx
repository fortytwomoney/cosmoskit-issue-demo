import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

type Props = {}

const vaults = [
  {
    name: "vault1",
    chain: "neutron"
  },
  {
    name: "vault1",
    chain: "juno"
  },
  {
    name: "vault1",
    chain: "terra2"
  }
]

const Earn = (props: Props) => {

  const router = useRouter()

  const handleRowClick = (chain: string) => {
    router.push(`/earn/vault/${chain}`)
  }

  return (
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
  )
}

export default Earn