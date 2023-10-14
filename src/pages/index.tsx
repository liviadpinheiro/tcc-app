import { Flex, Img, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MainTemplate from '../components/Template/MainTemplate'
import { Button } from '../components/Atom/Button'
import Link from 'next/link'
import { Testimonial } from '../components/Molecule/Testimonial'
import { NAVBAR_VARIANT } from '../components/Organism/Navbar'

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
      <MainTemplate pathname={pathname} navbarVariant={NAVBAR_VARIANT.signUp}>
        <Flex
          gap={'48px'}
          pt={{ base: '48px', md: '120px' }}
          pb={{ base: '32px', md: '48px' }}
          flexDir={'column'}
          alignItems={'center'}
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
                lineHeight={{ base: '44px', md: '56px' }}
                fontSize={{ base: '36px', md: '48px' }}
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
            <Flex
              w={{ base: '100%', md: 'unset' }}
              gap="12px"
              flexDir={{ base: 'column', md: 'row' }}
            >
              <Link href={'/cadastrar'}>
                <Button w={{ base: '100%', md: 'fit-content' }}>
                  Começar agora
                </Button>
              </Link>
              <Link href={'/contato'}>
                <Button w={{ base: '100%', md: 'unset' }} variant="secondary">
                  Fale conosco
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            w={'100%'}
            h={{ base: '200px', md: '376px' }}
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
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          pt={'48px'}
          pb={{ base: 'unset', md: '48px' }}
          alignItems={'center'}
          gap={{ base: '24px', md: '96px' }}
          justifyContent={'space-between'}
        >
          <Flex flexDir={'column'} gap={'16px'}>
            <Text
              lineHeight={{ base: '44px', md: '34px' }}
              fontSize={{ base: '36px', md: '28px' }}
              color={'primary.default'}
              fontFamily={'heading'}
            >
              aumente sua produtividade com a nossa plataforma
            </Text>
            <Text fontSize={'18px'} lineHeight={'24px'}>
              Nosso método exclusivo de compartilhamento de tiragens irá te
              surpreender.
            </Text>
            <Link href={'/cadastrar'}>
              <Button w={{ base: '100%', md: 'fit-content' }}>
                Começar agora
              </Button>
            </Link>
          </Flex>
          <Flex>
            <Img
              w={'100%'}
              h={'100%'}
              objectFit={'cover'}
              objectPosition={'center'}
              rounded={'8px'}
              src={'/images/home-2.jpg'}
              alt="Vista superior de uma mulher lendo tarô em casa"
            />
          </Flex>
        </Flex>
        <Flex
          gap={{ base: '24px', md: '32px' }}
          flexDir={'column'}
          py={{ base: '36px', md: '48px' }}
        >
          <Text
            lineHeight={'44px'}
            fontSize={'36px'}
            color={'primary.default'}
            fontFamily={'heading'}
          >
            relatos
          </Text>
          <Flex
            gap={{ base: '16px', md: 'unset' }}
            flexDir={{ base: 'column', md: 'row' }}
            justifyContent={'space-between'}
          >
            <Testimonial
              picture={'/images/profile-1.png'}
              state={'Maria'}
              name={'Rio de Janeiro'}
              testimonial={
                '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'
              }
            />
            <Testimonial
              picture={'/images/profile-1.png'}
              state={'Maria'}
              name={'Rio de Janeiro'}
              testimonial={
                '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'
              }
            />
            <Testimonial
              picture={'/images/profile-1.png'}
              state={'Maria'}
              name={'Rio de Janeiro'}
              testimonial={
                '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'
              }
            />
          </Flex>
        </Flex>
        <Flex
          bgColor={'primary.default'}
          py={{ base: '72px', md: '98px' }}
          mx={{ base: '-16px', md: '-96px' }}
          px={{ base: '16px', md: '96px' }}
          flexDir={{ base: 'column', md: 'row' }}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={{ base: '24px', md: 'unset' }}
        >
          <Text
            lineHeight={'34px'}
            fontSize={'28px'}
            color={'neutral.white'}
            fontFamily={'heading'}
            maxW={'456px'}
          >
            Crie sua conta gratuitamente e comece a sua jornada hoje mesmo!
          </Text>
          <Flex
            gap={{ base: '16px', md: '24px' }}
            flexDir={{ base: 'column', md: 'row' }}
            w={{ base: '100%', md: 'fit-content' }}
          >
            <Link href={'/contato'}>
              <Button
                w={{ base: '100%', md: 'fit-content' }}
                variant="secondary"
              >
                Fale conosco
              </Button>
            </Link>
            <Link href={'/cadastrar'}>
              <Button w={{ base: '100%', md: 'fit-content' }}>
                Começar agora
              </Button>
            </Link>
          </Flex>
        </Flex>
      </MainTemplate>
    </Flex>
  )
}

export default Home
