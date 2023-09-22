import Header from '@/components/Header'
import { Container, Stack } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}


const Layout = ({ children }: Props) => {

  return (
    <Container as={Stack} maxW="container.xl" gap="20px" py="20px">
      <Header />
      <Stack>{children}</Stack>
    </Container>
  )
}

export default Layout
