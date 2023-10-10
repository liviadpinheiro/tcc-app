import { Flex, Img, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MainTemplate from '../components/Template/MainTemplate'
import { Button } from '../components/Atom'
import Link from 'next/link'

const Home: NextPage = () => {
  const { pathname } = useRouter()
  return (
    <Flex>
      <Head>
        <title>Jornada</title>
        <meta
          name="description"
          content="TCC de Página Web sobre Cartomancia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate pathname={pathname} isLogged={false}>
        <Flex
          gap={'48px'}
          pt={['48px', '120px']}
          pb={['32px', '48px']}
          flexDir={'column'}
          alignItems={'center'}
          px={['16px', '96px']}
        >
          <Flex
            gap="24px"
            alignItems={'center'}
            maxW={'554px'}
            flexDir={'column'}
          >
            <Flex flexDir={'column'} gap="8px">
              <Text
                textAlign={'center'}
                lineHeight={['44px', '56px']}
                fontSize={['36px', '48px']}
                color={'primary.default'}
                fontFamily={'heading'}
              >
                tudo começa com um salto de fé
              </Text>
              <Text fontSize={'18px'} lineHeight={'24px'} textAlign={'center'}>
                Anote toda a sua jornada, consulte onde e quando quiser,
                enquanto documenta de forma simples e prática as suas tiragens e
                compartilha com seus consulentes.
              </Text>
            </Flex>
            <Flex w={['100%', 'unset']} gap="12px" flexDir={['column', 'row']}>
              <Link href={'/cadastrar'}>
                <Button w={['100%', 'unset']}>Começar agora</Button>
              </Link>
              <Link href={'/contato'}>
                <Button w={['100%', 'unset']} variant="secondary">
                  Fale conosco
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            w={'100%'}
            h={['200px', '376px']}
            overflow={'hidden'}
            position={'relative'}
          >
            <Img
              w={'100%'}
              h={'100%'}
              objectFit={'cover'}
              objectPosition={'center'}
              rounded={'8px'}
              src={'/images/home-1.jpg'}
              alt="Vista superior de uma mulher lendo tarô em casa"
            />
          </Flex>
        </Flex>
      </MainTemplate>
    </Flex>
  )
}

export default Home
