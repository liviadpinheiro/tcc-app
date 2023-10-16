import {
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { LogoBgDarkIcon } from '../../../../public/icons/logo-bg-dark'
import Link from 'next/link'
import { NAV_ITEMS, NavItem } from './NavItens'
import { Button } from '../../Atom/Button'
import { LogoSoloBgDarkIcon } from '../../../../public/icons/logo-solo-bg-dark'
import { HamburgerMenuIcon } from '../../../../public/icons/hamburger-menu'
import { useRouter } from 'next/router'

export enum NAVBAR_VARIANT {
  logIn = 'log_in',
  signUp = 'sign_up',
  default = 'default',
}

export interface NavbarProps {
  variant: NAVBAR_VARIANT
  pathname: string
  userName: string | null
}

export const Navbar = ({ variant, pathname, userName }: NavbarProps) => {
  const navbarType = useBreakpointValue({ base: 'mobile', md: 'desktop' })

  const router = useRouter()

  const logout = () => {
    localStorage.clear()
    router.push('/')
    window.location.reload()
  }

  return (
    <Flex
      bgColor={'primary.default'}
      w={'100%'}
      py={'24px'}
      px={{ base: '16px', sm: '32px', md: '96px' }}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Flex h={'32px'} alignItems={'center'}>
        <Link href="/">
          {navbarType === 'desktop' ? (
            <LogoBgDarkIcon />
          ) : (
            <LogoSoloBgDarkIcon />
          )}
        </Link>
      </Flex>
      {navbarType === 'desktop' ? (
        <>
          <Flex gap={'24px'}>
            {NAV_ITEMS.map(({ href, label }: NavItem) => (
              <Link href={href} key={href}>
                <Text
                  color={'neutral.white'}
                  textDecor={pathname === href ? 'underline' : 'none'}
                >
                  {label}
                </Text>
              </Link>
            ))}
          </Flex>
          {variant === NAVBAR_VARIANT.signUp && (
            <Flex gap={'24px'} alignItems={'center'}>
              <Link href={'/entrar'}>
                <Text color={'neutral.white'}>Entrar</Text>
              </Link>
              <Link href={'/cadastrar'}>
                <Button variant={'rounded'} size={'sm'}>
                  Cadastrar
                </Button>
              </Link>
            </Flex>
          )}
          {variant === NAVBAR_VARIANT.logIn && (
            <Menu>
              <MenuButton
                as={Text}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Text fontWeight={'700'} color={'neutral.white'}>
                  {userName}
                </Text>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={logout}>Sair</MenuItem>
              </MenuList>
            </Menu>
          )}
        </>
      ) : (
        <Menu>
          <MenuButton as={Text} variant={'link'} cursor={'pointer'} minW={0}>
            <HamburgerMenuIcon />
          </MenuButton>
          <MenuList>
            {NAV_ITEMS.map(({ href, label }: NavItem) => (
              <Link href={href} key={href}>
                <MenuItem>{label}</MenuItem>
              </Link>
            ))}
            {variant !== NAVBAR_VARIANT.default && <MenuDivider />}
            {variant === NAVBAR_VARIANT.signUp && (
              <>
                <Link href={'/entrar'}>
                  <MenuItem>Entrar</MenuItem>
                </Link>
                <Link href={'/cadastrar'}>
                  <MenuItem>Cadastrar</MenuItem>
                </Link>
              </>
            )}
            {variant === NAVBAR_VARIANT.logIn && <MenuItem>Sair</MenuItem>}
          </MenuList>
        </Menu>
      )}
    </Flex>
  )
}
