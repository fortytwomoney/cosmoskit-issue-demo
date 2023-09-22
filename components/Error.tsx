import React from 'react'
import { Stack, Text } from '@chakra-ui/react'

type Props = {
  isError?: boolean
  message: string | undefined | null
}

const Error = ({ isError = false, message }: Props) => {
  if (!isError) return null

  return (
    <Text color="red.500" fontSize="sm">
      {message}
    </Text>
  )
}

export default Error
