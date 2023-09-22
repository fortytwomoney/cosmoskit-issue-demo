import { Box, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"
import { chains } from "chain-registry"
import { useRouter } from "next/router"
import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
  SingleValue,
} from "chakra-react-select";

type Props = {}

type Option = SingleValue<{
  label: string;
  value: string;
}>

const Swap = (props: Props) => {

  const router = useRouter()
  const { fromChain, toChain, fromToken, toToken } = router.query

  const onChainSelect = (selected: Option) => {
    const newQuery = { ...router.query, fromChain: selected?.value }
    router.replace({ query: newQuery })
  }

  return (
    <Stack alignItems="center">
      <Text>Swap</Text>
      <Text>Source: {fromChain}</Text>

      <Box >

        <Select
          colorScheme="purple"
          options={chains.map((chain) => {
            return {
              label: chain.pretty_name,
              value: chain.chain_name,
            }
          })}
          onChange={onChainSelect}
        />
      </Box>

      <Heading size="md">Wallet issues on swap page</Heading>

      <Box p="5" bg="red.300" borderRadius="md">
        <UnorderedList>
          <ListItem>Switching chains that are not approved, will cause connect button to show, even after approveing chain on kepler</ListItem>
          <ListItem>Some time dosent show add chain approval on kepler if chain is not added to kepler</ListItem>
          <ListItem>We are trying have wallet to be connected all the time when switching between the chains, if chain is not added or approved on keplr, it shoud popup approval screen and connect wallet again</ListItem>
        </UnorderedList>
      </Box>


    </Stack>
  )
}

export default Swap