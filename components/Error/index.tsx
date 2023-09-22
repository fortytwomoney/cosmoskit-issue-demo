import React, { FC } from 'react'

import { Box, Button, Center, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface Props {
  statusCode: number
}

const IndexPageComponent: FC<Props> = ({ statusCode }) => {
  return (
    <Center h="70vh" as={Stack}>
      <Heading textAlign="center">Oups...</Heading>
      <Text fontSize="xl" lineHeight="tall" textAlign="center">
        {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
      </Text>
      <Box>
        <Link href="/">
          <Button as="a" variant="primary">
            Return to the home page
          </Button>
        </Link>
      </Box>
    </Center>
  )
}

export default IndexPageComponent
