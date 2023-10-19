import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MainTemplate from '../../components/Template/MainTemplate'

const Consulta: NextPage = () => {
  const { pathname } = useRouter()
  return (
    <Flex>
      <Head>
        <title>Consulta | Jornada</title>
        <meta
          name="description"
          content="TCC de Página Web sobre Cartomancia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate pathname={pathname}>
        <Flex>Página em construção</Flex>
      </MainTemplate>
    </Flex>
  )
}

export default Consulta
