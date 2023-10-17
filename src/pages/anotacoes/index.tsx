import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MainTemplate from '../../components/Template/MainTemplate'
import { Button } from '../../components/Atom/Button'
import Link from 'next/link'
import { IDeck } from 'src/interfaces/deck.entity'
import { findAllDecks } from 'src/service/deck.service'
import { useEffect, useState } from 'react'

const Notes: NextPage<{ decks: IDeck[]}> = ({ decks }) => {
  const { pathname } = useRouter()

  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, []);

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
      <MainTemplate pathname={pathname}>
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
          {decks.map(({ name, description, imageUrl, imagePosition, id }) => {
            return (
              <Box
                position="relative"
                maxH="245px"
                w="full"
                rounded="8px"
                overflow="hidden"
                key={id}
              >
                <Image
                  w={'100%'}
                  h={'100%'}
                  objectFit={'cover'}
                  src={imageUrl}
                  objectPosition={imagePosition}
                  alt={`Imagem do oráculo ${name.toLowerCase()}`}
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
                      {name}
                    </Text>
                    <Text textStyle={'bodyLG'} color={'neutral.gray'}>
                      {description}
                    </Text>
                  </Flex>
                  <Link href={token ? `/anotacoes/${id}` : '/cadastrar'}>
                    <Button
                      w={{ base: '100%', md: 'fit-content' }}
                      variant="secondary"
                    >
                      {token ? 'Selecionar' : 'Criar conta'}
                    </Button>
                  </Link>
                </Flex>
              </Box>
            )})}
          </Flex>
        </Flex>
      </MainTemplate>
    </Flex>
  )
}

export async function getServerSideProps() {
  const decks: IDeck[] = await findAllDecks()

  return {
    props: {
      decks
    }
  }
}

export default Notes
