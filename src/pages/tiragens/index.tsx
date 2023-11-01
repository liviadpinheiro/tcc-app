import { Flex, Img, SimpleGrid, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MainTemplate from '../../components/Template/MainTemplate'
import { Input } from '../../components/Atom/Input'
import { Select } from '../../components/Atom/Select'
import { Button } from '../../components/Atom/Button'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useSpreadStore } from 'src/stores/spread.store'
import { IBeforeSpread } from 'src/interfaces/before-spread.entity'
import { findAllDecks } from 'src/service/deck.service'
import { IDeck } from 'src/interfaces/deck.entity'

const validationSchema = yup.object().shape({
  consultantName: yup.string().required('O nome é obrigatório'),
  consultantBirthdate: yup
    .date()
    .max(new Date(), 'A data de nascimento não pode ser no futuro')
    .required('A data de nascimento é obrigatória'),
  consultantEmail: yup
    .string()
    .email('E-mail inválido')
    .required('O e-mail do consulente é obrigatório'),
  deck: yup.string().required('O oráculo é obrigatório'),
  theme: yup.string().required('O tema é obrigatório'),
  spread: yup.string().required('O nome da tiragem é obrigatório'),
})

const Spread: NextPage<{ decks: IDeck[] }> = ({ decks }) => {
  const router = useRouter()
  const { addSpreadInfo } = useSpreadStore()

  const [token, setToken] = useState<string | null>(null)

  const formik = useFormik({
    initialValues: {
      consultantName: '',
      consultantBirthdate: undefined,
      consultantEmail: '',
      deck: '',
      theme: '',
      spread: '',
    },
    validationSchema,
    onSubmit: async (values: IBeforeSpread) => {
      if (!token) router.push('/cadastrar')

      addSpreadInfo(values)

      router.push('/tiragens/consulta')
    },
  })

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])
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
      <MainTemplate pathname={router.pathname}>
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
            Esta ferramenta única facilitará muito o dia-a-dia de trabalho e
            estudo, principalmente na interação com o consulente. Você poderá
            exportar a tiragem em PDF ou enviar diretamente para o consulente
            através do e-mail.
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
            <form onSubmit={formik.handleSubmit}>
              <Flex flexDir={'column'} gap={'24px'}>
                <Input
                  label={'Nome do consulente'}
                  placeholder="João Silva"
                  variant={'bgDark'}
                  labelVariant={'bgDark'}
                  w={'100%'}
                  errorText={
                    formik.touched.consultantName
                      ? formik.errors.consultantName
                      : undefined
                  }
                  {...formik.getFieldProps('consultantName')}
                />
                <Input
                  label={'Data de nascimento do consulente'}
                  w={'100%'}
                  variant={'bgDark'}
                  labelVariant={'bgDark'}
                  type={'date'}
                  errorText={
                    formik.touched.consultantBirthdate
                      ? formik.errors.consultantBirthdate
                      : undefined
                  }
                  {...formik.getFieldProps('consultantBirthdate')}
                />
                <Input
                  label={'E-mail do consulente'}
                  placeholder="joao@silva.com"
                  variant={'bgDark'}
                  labelVariant={'bgDark'}
                  w={'100%'}
                  errorText={
                    formik.touched.consultantEmail
                      ? formik.errors.consultantEmail
                      : undefined
                  }
                  {...formik.getFieldProps('consultantEmail')}
                />
                <Select
                  labelVariant={'bgDark'}
                  label={'Oráculo'}
                  placeholder={'Selecione um oráculo'}
                  errorText={
                    formik.touched.deck ? formik.errors.deck : undefined
                  }
                  {...formik.getFieldProps('deck')}
                >
                  {decks.map((deck) => (
                    <option key={deck.id} value={deck.name}>
                      {deck.name}
                    </option>
                  ))}
                </Select>
                <Input
                  label={'Tema da consulta'}
                  placeholder="Pergunta ou tópico geral"
                  variant={'bgDark'}
                  labelVariant={'bgDark'}
                  w={'100%'}
                  errorText={
                    formik.touched.theme ? formik.errors.theme : undefined
                  }
                  {...formik.getFieldProps('theme')}
                />
                <Input
                  label={'Nome da tiragem'}
                  placeholder="Nome ou descrição da tiragem"
                  variant={'bgDark'}
                  labelVariant={'bgDark'}
                  w={'100%'}
                  errorText={
                    formik.touched.spread ? formik.errors.spread : undefined
                  }
                  {...formik.getFieldProps('spread')}
                />
                <Flex>
                  <Button
                    type={'submit'}
                    w={'fit-content'}
                    alignSelf={'left'}
                    variant="rounded"
                  >
                    {token ? 'Enviar' : 'Criar conta'}
                  </Button>
                </Flex>
              </Flex>
            </form>
          </SimpleGrid>
        </Flex>
      </MainTemplate>
    </Flex>
  )
}

export async function getServerSideProps() {
  const decks: IDeck[] = await findAllDecks()

  return {
    props: {
      decks,
    },
  }
}

export default Spread
