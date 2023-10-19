import { Flex } from '@chakra-ui/react'
import { ReactNode, useEffect, useState } from 'react'
import { NAVBAR_VARIANT, Navbar } from '../Organism/Navbar'
import { Footer } from '../Organism/Footer'

interface MainTemplateProps {
  children: ReactNode
  pathname: string
  navbarVariant?: NAVBAR_VARIANT
}

function MainTemplate({
  children,
  pathname,
  navbarVariant,
}: MainTemplateProps) {
  const [userName, setUserName] = useState<string | null>(null)
  const [navbarVariantDefault, setNavbarVariantDefault] =
    useState<NAVBAR_VARIANT>(NAVBAR_VARIANT.signUp)

  useEffect(() => {
    setUserName(localStorage.getItem('name'))
    setNavbarVariantDefault(
      localStorage.getItem('token')
        ? NAVBAR_VARIANT.logIn
        : NAVBAR_VARIANT.signUp
    )
  }, [])

  return (
    <Flex bgColor={'neutral.white'} flexDir={'column'} w={'100%'}>
      <Navbar
        pathname={pathname}
        variant={navbarVariant ?? navbarVariantDefault}
        userName={userName}
      />
      <Flex px={{ base: '16px', md: '96px' }} flexDir={'column'}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}

export default MainTemplate
