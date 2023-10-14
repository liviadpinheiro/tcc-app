import { Box, Flex, Img, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MainTemplate from '../components/Template/MainTemplate'
import { NAVBAR_VARIANT } from '../components/Organism/Navbar'
import { Button } from '../components/Atom/Button'
import Link from 'next/link'

const Notes: NextPage = () => {
  const { pathname } = useRouter()
  return (
    <Flex>
      <Head>
        <title>Anotações | Jornada</title>
        <meta
          name="description"
          content="TCC de Página Web sobre Cartomancia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate pathname={pathname} navbarVariant={NAVBAR_VARIANT.signUp}>
        <Flex
          gap={'36px'}
          flexDir={'column'}
          w={'100%'}
          alignItems={'center'}
          pt={{ base: '32px', md: '48px' }}
        >
          <Flex gap={'12px'} alignItems={'center'} flexDir={'column'}>
            <Text
              color={'primary.default'}
              textStyle={{ base: 'heading3', md: 'heading2' }}
            >
              selecione um oráculo
            </Text>
            <Text textStyle={'bodyLG'}>
              Escolha qual oráculo você deseja estudar hoje, suas anotações
              ficarão salvas conosco!
            </Text>
          </Flex>
          <Flex w={'100%'} flexDir={'column'} gap={'20px'}>
            <Box
              position="relative"
              maxH="245px"
              w="full"
              rounded="8px"
              overflow="hidden"
            >
              <Img
                w={'100%'}
                h={'100%'}
                objectFit={'cover'}
                src={'/images/notes1.jpg'}
                objectPosition={'top'}
              />
              <Box
                position={'absolute'}
                bgGradient={
                  'linear(to-r, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50))'
                }
                top={'0'}
                left={'0'}
                right={'0'}
                bottom={'0'}
              />
              <Flex
                position={'absolute'}
                top={'0'}
                left={'0'}
                right={'0'}
                bottom={'0'}
                p={{ base: '16px', md: '24px' }}
                maxW={'340px'}
                gap={'16px'}
                flexDir={'column'}
              >
                <Flex gap={'8px'} flexDir={'column'}>
                  <Text textStyle={'heading3'} color={'neutral.white'}>
                    Tarô de Marselha
                  </Text>
                  <Text textStyle={'bodyLG'} color={'neutral.gray'}>
                    Esse é um dos baralhos mais antigos e respeitados, originado
                    na França medieval. É composto por 78 cartas ricas em
                    simbolismo.
                  </Text>
                </Flex>
                <Link href={'/cadastrar'}>
                  <Button
                    w={{ base: '100%', md: 'fit-content' }}
                    variant="secondary"
                  >
                    Selecionar
                  </Button>
                </Link>
              </Flex>
            </Box>
            <Box
              position="relative"
              maxH="245px"
              w="full"
              rounded="8px"
              overflow="hidden"
            >
              <Img
                w={'100%'}
                h={'100%'}
                objectFit={'cover'}
                src={'/images/notes2.jpg'}
                objectPosition={'top'}
              />
              <Box
                position={'absolute'}
                bgGradient={
                  'linear(to-r, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50))'
                }
                top={'0'}
                left={'0'}
                right={'0'}
                bottom={'0'}
              />
              <Flex
                position={'absolute'}
                top={'0'}
                left={'0'}
                right={'0'}
                bottom={'0'}
                p={{ base: '16px', md: '24px' }}
                maxW={'340px'}
                gap={'16px'}
                flexDir={'column'}
              >
                <Flex gap={'8px'} flexDir={'column'}>
                  <Text textStyle={'heading3'} color={'neutral.white'}>
                    Baralho Cigano
                  </Text>
                  <Text textStyle={'bodyLG'} color={'neutral.gray'}>
                    Esse é um oráculo baseado em 36 cartas que tem raízes na
                    tradição cigana e é conhecido por suas mensagens diretas e
                    práticas.
                  </Text>
                </Flex>
                <Link href={'/cadastrar'}>
                  <Button
                    w={{ base: '100%', md: 'fit-content' }}
                    variant="secondary"
                  >
                    Selecionar
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </MainTemplate>
    </Flex>
  )
}

export default Notes
