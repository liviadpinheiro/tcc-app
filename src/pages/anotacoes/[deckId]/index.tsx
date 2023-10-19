import { Box, Flex, Text } from "@chakra-ui/react"
import { GetServerSidePropsContext, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import MainTemplate from "../../../components/Template/MainTemplate"
import { findAllDeckCards } from "src/service/card.service"
import { ICard } from "src/interfaces/card.entity"
import { UUID } from "crypto"
import { useDeckStore } from "src/stores/deck.store"
import { Button } from "src/components/Atom/Button"
import { useEffect, useState } from "react"

const Cards: NextPage<{ cards: ICard[]}> = ({ cards }) => {
  const router = useRouter()
  const { selectedDeck } = useDeckStore()

  const [token, setToken] = useState<string | null>(null)

  const handleClick = (card: ICard) => {
    if (token) {
      router.push(`/anotacoes/${card.deck_id}/${card.id}`)
    } else {
      router.push('/cadastrar')
    }
  }

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, []);

  return (
    <Flex>
      <Head>
        <title>{selectedDeck.name} | Jornada</title>
        <meta
          name="description"
          content="TCC de Página Web sobre Cartomancia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate pathname={router.pathname}>
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
              {selectedDeck.name?.toLowerCase()}
            </Text>
            <Text textStyle={'bodyLG'}>
              Escolha qual carta você deseja estudar hoje, suas anotações ficarão salvas conosco!
            </Text>
          </Flex>
          <Flex w={'100%'} flexDir={'column'} gap={'20px'}>
          {cards?.map((card) => {
            return (
              <Box
                position="relative"
                h="90px"
                w="100%"
                rounded="8px"
                overflow="hidden"
                key={card.id}
              >
                <Box
                  w={'100%'}
                  h={'100%'}
                  bgColor={'primary.default'}
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
                  gap={'16px'}
                  flexDir={{ base: 'column', sm: 'row' }}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Text textStyle={'heading3'} color={'neutral.white'}>
                    {card.number}. {card.name}
                  </Text>
                  <Button
                    w={{ base: '100%', sm: 'fit-content' }}
                    variant="secondary"
                    onClick={() => handleClick(card)}
                  >
                    Selecionar
                  </Button>
                </Flex>
              </Box>
            )})}
          </Flex>
        </Flex>
      </MainTemplate>
    </Flex>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { deckId } = context.params as { deckId: UUID }

  const cards: ICard[] = await findAllDeckCards(deckId)

  return {
    props: {
      cards
    }
  }
}

export default Cards
