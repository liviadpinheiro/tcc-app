import { Flex, SimpleGrid, Text, Img } from '@chakra-ui/react'
import MainTemplate from '../components/Template/MainTemplate'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { NAVBAR_VARIANT } from '../components/Organism/Navbar'
import { Input } from '../components/Atom/Input'
import { CustomHideIcon } from '../../public/icons/hide'
import { useState } from 'react'
import { CustomShowIcon } from '../../public/icons/show'
import Link from 'next/link'
import { Button } from '../components/Atom/Button'

const LogIn: NextPage = () => {
  const [showPass, setShowPass] = useState(false)
  const [showConfPass, setShowConfPass] = useState(false)
  const handleClickPass = () => setShowPass(!showPass)
  const handleClickConfPass = () => setShowConfPass(!showConfPass)

  const { pathname } = useRouter()

  return (
    <Flex>
      <Head>
        <title>Cadastrar | Jornada</title>
        <meta
          name="description"
          content="TCC de Página Web sobre Cartomancia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate pathname={pathname} navbarVariant={NAVBAR_VARIANT.default}>
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          alignItems={'center'}
          pt={'48px'}
          pb={{ base: '32px', md: '48px' }}
          gap={{ base: '36px', md: '128px' }}
        >
          <Flex
            alignItems={'center'}
            flexDir={'column'}
            gap={{ base: '36px', md: '32px' }}
          >
            <Text
              textStyle={{ base: 'heading2', md: 'heading3' }}
              color={'primary.default'}
              textAlign={'center'}
            >
              prepare-se para iniciar sua jornada
            </Text>
            <Img
              src={'/images/signup.jpg'}
              w={'100%'}
              h={'100%'}
              objectFit={'cover'}
              rounded={'8px'}
            />
          </Flex>
          <Flex flexDir={'column'} gap={'24px'}>
            <Input
              label={'Nome completo'}
              placeholder={'Maria Silva'}
              labelVariant={'bgLight'}
              variant={'outline'}
            />
            <Input
              label={'e-mail'}
              placeholder={'maria@silva.com'}
              labelVariant={'bgLight'}
              variant={'outline'}
              type={'email'}
            />
            <Input
              label={'confirmar e-mail'}
              placeholder={'maria@silva.com'}
              labelVariant={'bgLight'}
              variant={'outline'}
              type={'email'}
            />
            <Input
              label={'cpf'}
              placeholder={'111.222.333-44'}
              labelVariant={'bgLight'}
              variant={'outline'}
            />
            <Input
              label={'Data de nascimento'}
              labelVariant={'bgLight'}
              type={'date'}
              variant={'outline'}
            />
            <Input
              label={'senha'}
              placeholder={'S3nha!'}
              labelVariant={'bgLight'}
              variant={'outline'}
              rightElement={
                <Flex onClick={handleClickPass}>
                  {showPass ? CustomHideIcon() : CustomShowIcon()}
                </Flex>
              }
              type={showPass ? 'text' : 'password'}
            />
            <Input
              label={'confirmar senha'}
              placeholder={'******'}
              labelVariant={'bgLight'}
              rightElement={
                <Flex onClick={handleClickConfPass}>
                  {showConfPass ? CustomHideIcon() : CustomShowIcon()}
                </Flex>
              }
              variant={'outline'}
              type={showConfPass ? 'text' : 'password'}
            />
            <Flex gap={'12px'} flexDir={{ base: 'column', md: 'row' }}>
              <Link href={'/'}>
                <Button w={{ base: '100%', md: 'fit-content' }}>
                  Criar conta
                </Button>
              </Link>
              <Link href={'/entrar'}>
                <Button
                  w={{ base: '100%', md: 'fit-content' }}
                  variant="secondary"
                >
                  Ir para login
                </Button>
              </Link>
            </Flex>
          </Flex>
        </SimpleGrid>
      </MainTemplate>
    </Flex>
  )
}

export default LogIn
