import { Flex } from "@chakra-ui/react"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import MainTemplate from "../../../components/Template/MainTemplate"

const Cards: NextPage = () => {
  const router = useRouter()
  const { id } = router.query;

  return (
    <Flex>
      <Head>
        <title>Baralho | Jornada</title>
        <meta
          name="description"
          content="TCC de Página Web sobre Cartomancia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate pathname={router.pathname}>
        <Flex>
          Página em construção
        </Flex>
      </MainTemplate>
    </Flex>
  )
}

export default Cards
