import { Flex, Text } from '@chakra-ui/react'
import { LogoBgLightIcon } from '../../../../public/icons/logo-bg-light'
import { NAV_ITEMS, NavItem } from '../Navbar/NavItens'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Flex
      w={'100%'}
      py={'48px'}
      px={{ base: '16px', md: '96px' }}
      flexDirection={'column'}
      bgColor={'neutral.white'}
      gap={'24px'}
    >
      <Flex
        alignItems={{ base: 'flex-start', sm: 'center' }}
        w={'100%'}
        gap={{ base: '20px', md: 'unset' }}
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent={'space-between'}
      >
        <Link href="/">
          <LogoBgLightIcon />
        </Link>
        <Flex gap={'24px'} flexDir={{ base: 'column', sm: 'row' }}>
          {NAV_ITEMS.map(({ href, label }: NavItem) => (
            <Link href={href} key={href}>
              <Text color={'neutral.black'} textDecor={'underline'}>
                {label}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>
      <Flex
        pt={'20px'}
        justifyContent={'center'}
        borderTop={'1px solid'}
        borderTopColor={'neutral.gray'}
      >
        <Text color={'neutral.gray'} fontSize={'14px'}>
          © 2023 Jornada | Todos os direitos reservados
        </Text>
      </Flex>
    </Flex>
  )
}
