import { Box, Heading, ListItem, OrderedList, Stack, Text } from "@chakra-ui/react";
import { chains } from "chain-registry";
import {
  Select,
  SingleValue
} from "chakra-react-select";
import { useRouter } from "next/router";

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

      <Box mb="10">

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

      <Stack borderRadius="md" bg="gray.200" p="5">

        <Heading size="sm">Issue Description:</Heading>
        <Text>
          When switching chains, it disconnects the wallet, and connect button shows up again. This is happening when switching between chains that are not approved or added on kepler.
        </Text>

        <Heading size="sm">Steps to reproduce:</Heading>
        <OrderedList>
          <ListItem>Connect to keplr</ListItem>
          <ListItem>Remove connections to the app inside keplr >Settings>Security&privacy</ListItem>
          <ListItem>Refresh page</ListItem>
          <ListItem>Search for chains other than Juno, Terra or Neutron</ListItem>
          <ListItem>Ex: Select migaloo or injective</ListItem>
          <ListItem>See the wallet disconnect</ListItem>
        </OrderedList>
      </Stack>

    </Stack>
  )
}

export default Swap