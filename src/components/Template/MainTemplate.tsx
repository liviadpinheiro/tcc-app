import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { NAVBAR_VARIANT, Navbar } from '../Organism/Navbar'
import { Footer } from '../Organism/Footer'

interface MainTemplateProps {
  children: ReactNode
  pathname: string
  isLogged: boolean
}

function MainTemplate({ children, pathname, isLogged }: MainTemplateProps) {
  return (
    <Flex bgColor={'neutral.white'} flexDir={'column'} w={'100%'}>
      <Navbar
        pathname={pathname}
        variant={isLogged ? NAVBAR_VARIANT.logIn : NAVBAR_VARIANT.signUp}
      />
      <Flex
        px={{ base: '16px', md: '96px' }}
        flexDir={'column'}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}

export default MainTemplate
