import { Link, Stack, Text } from "@chakra-ui/react"
import NextLink from "next/link"

type Props = {
  id: string // chainName
}

const VaultById = ({ id: chainName }: Props) => {
  return (
    <Stack alignItems="center">
      <Text>Vault on : {chainName}</Text>

      <Link
        as={NextLink}
        variant="link"
        href="/earn"
        fontSize="md"
        lineHeight="30px"
        letterSpacing="1px"
        color="blue"
      >
        Back
      </Link>
    </Stack>
  )
}

export default VaultById