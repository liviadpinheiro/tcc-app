import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Footer, NAVBAR_VARIANT, Navbar } from '../Organism'

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
      {children}
      <Footer />
    </Flex>
  )
}

export default MainTemplate
