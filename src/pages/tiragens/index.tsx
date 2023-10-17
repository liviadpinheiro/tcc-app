import { Flex, Img, SimpleGrid, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import MainTemplate from "../../components/Template/MainTemplate"
import { Input } from "../../components/Atom/Input"
import { Select } from "../../components/Atom/Select"
import { Button } from "../../components/Atom/Button"
import { useEffect, useState } from "react"
import Link from "next/link"

const Spread: NextPage = () => {
  const { pathname } = useRouter()

  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, []);
  return (
    <Flex>
      <Head>
        <title>Tiragens | Jornada</title>
        <meta
          name="description"
          content="TCC de Página Web sobre Cartomancia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate pathname={pathname}>
      <Flex
          flexDir={'column'}
          maxW={'554px'}
          gap={'8px'}
          alignSelf={'center'}
          pt={{ base: '48px', md: '120px' }}
          pb={{ base: '36px', md: '64px' }}
        >
          <Text
            textStyle={'heading1'}
            color={'primary.default'}
            textAlign={{ base: 'left', md: 'center' }}
          >
            registre todas as suas tiragens
          </Text>
          <Text textAlign={'center'} textStyle={'bodyLG'}>
            Esta ferramenta única facilitará muito o dia-a-dia de trabalho e estudo, principalmente na interação com o consulente. Você poderá exportar a tiragem em PDF ou enviar diretamente para o consulente através do e-mail.
          </Text>
        </Flex>
        <Flex
          mx={{ base: '-16px', md: '-96px' }}
          flexDir={'column'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Img w="100%" maxH="200px" src="/images/moon-bg.png" />
          <SimpleGrid
            bgColor={'primary.default'}
            pt={{ base: '48px', md: '96px' }}
            pb={{ base: '32px', md: '48px' }}
            w={'100%'}
            px={{ base: '16px', md: '96px' }}
            gap={{ base: '8px', md: '48px' }}
            columns={[1, 1, 2, 2]}
            alignItems={'center'}
          >
            <Img
              w={'100%'}
              h={'100%'}
              maxH={'376px'}
              objectFit={'cover'}
              rounded={'8px'}
              src="/images/spread.jpg"
            />
            <Flex flexDir={'column'} gap={'24px'}>
              <Input
                label={'Nome do consulente'}
                placeholder="João Silva"
                variant={'bgDark'}
                w={'100%'}
              />
              <Input
                label={'Data de nascimento do consulente'}
                w={'100%'}
                variant={'bgDark'}
                type={'date'}
              />
              <Input
                label={'E-mail do consulente'}
                placeholder="joao@silva.com"
                variant={'bgDark'}
                w={'100%'}
                type={'email'}
              />
              <Select label={'Oráculo'} placeholder={'Selecione um oráculo'}>
                <option value="taro">Tarô</option>
                <option value="baralho-cigano">Baralho Cigano</option>
              </Select>
              <Input
                label={'Tema da consulta'}
                placeholder="Pergunta ou tópico geral"
                variant={'bgDark'}
                w={'100%'}
              />
              <Input
                label={'Nome da tiragem'}
                placeholder="Nome ou descrição da tiragem"
                variant={'bgDark'}
                w={'100%'}
              />
              <Input
                label={'Número de cartas'}
                placeholder="0"
                variant={'bgDark'}
                w={'100%'}
                type="number"
              />
              <Link href={token ? '/tiragens/consulta' : '/cadastrar'}>
                <Button w={'fit-content'} alignSelf={'left'} variant="rounded">
                  {token ? 'Enviar' : 'Criar conta'}
                </Button>
              </Link>
            </Flex>
          </SimpleGrid>
        </Flex>
      </MainTemplate>
    </Flex>
  )
}

export default Spread
