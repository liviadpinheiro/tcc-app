import { Flex, SimpleGrid, Image, useToast, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import MainTemplate from "../../../components/Template/MainTemplate"
import { useCardStore } from "src/stores/card.store"
import { useEffect, useState } from "react"
import { useFormik } from "formik"
import * as yup from "yup"
import { CreateNotesDTO } from "src/interfaces/create-notes.dto"
import { createNotes, findNotesByCardAndUser } from "src/service/notes.service"
import { Input } from "src/components/Atom/Input"
import { Button } from "src/components/Atom/Button"
import { INotes } from "src/interfaces/notes.entity"

const validationSchema = yup.object().shape({
  meaning: yup.string(),
  keywords: yup.string(),
  elements_meaning: yup.string(),
  specific_meaning: yup.string(),
  related_theme: yup.string(),
  additional_observation: yup.string(),
})

const Cards: NextPage = () => {
  const router = useRouter()
  const toast = useToast()
  const { selectedCard } = useCardStore()

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null)
  const [notesData, setNotesData] = useState<CreateNotesDTO>({
    meaning: '',
    keywords: '',
    elements_meaning: '',
    specific_meaning: '',
    related_theme: '',
    additional_observation: '',
    card_id: '',
    user_id: ''
  });

  const formik = useFormik({
    initialValues: {
      meaning: notesData.meaning,
      keywords: notesData.keywords,
      elements_meaning: notesData.elements_meaning,
      specific_meaning: notesData.specific_meaning,
      related_theme: notesData.related_theme,
      additional_observation: notesData.additional_observation,
      card_id: notesData.card_id,
      user_id: notesData.user_id
    },
    validationSchema,
    onSubmit: async (values: CreateNotesDTO) => {
      setIsLoading(true)
      try {
        Object.assign(values, { card_id: selectedCard.id, user_id: userId })

        await createNotes(values)

        toast({
          title: 'Salvamento realizado.',
          description: "Você salvou suas anotações com sucesso!",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } catch (error) {
        toast({
          title: "Erro! Tente novamente.",
          // @ts-ignore
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setIsLoading(true)
      }
    },
  });

  useEffect(() => {
    setUserId(localStorage.getItem('userId'))
  }, []);

  useEffect(() => {
    formik.setValues(notesData)
  }, [notesData]);

  useEffect(() => {
    async function fetchData() {
      const localUserId = localStorage.getItem('userId')

      setNotesData(await findNotesByCardAndUser(selectedCard.id, localUserId ?? "") ?? {})
    }
    fetchData();
  }, []);

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
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          alignItems={'center'}
          pt={'48px'}
          pb={{ base: '32px', md: '48px' }}
          gap={{ base: '36px', md: '128px' }}
          justifyItems={'center'}
        >
          <Image
            src={selectedCard.imageUrl}
            h={'100%'}
            objectFit={'contain'}
            rounded={'8px'}
            alt={`Imagem da carta ${selectedCard.name}`}
          />
          <form onSubmit={formik.handleSubmit}>
            <Flex flexDir={'column'} gap={'24px'} width={'100%'}>
              <Text textStyle={{ base: 'heading2', md: 'heading1' }}>
                {selectedCard.name}
              </Text>
              <Input
                label={'SIGNIFICADO PRINCIPAL'}
                placeholder={'O que a carta representa para você?'}
                labelVariant={'bgLight'}
                variant={'outline'}
                {...formik.getFieldProps("meaning")}
              />
              <Input
                label={'palavras-chave'}
                placeholder={'Palavras curtas e diretas sobre a carta'}
                labelVariant={'bgLight'}
                variant={'outline'}
                {...formik.getFieldProps("keywords")}
              />
              <Input
                label={'Significado dos elementos'}
                placeholder={'O que seus elementos simbolizam?'}
                labelVariant={'bgLight'}
                variant={'outline'}
                {...formik.getFieldProps("elements_meaning")}
              />
              <Input
                label={'Significado em áreas específicas'}
                placeholder={'O que ela simboliza na saúde ou amor?'}
                labelVariant={'bgLight'}
                variant={'outline'}
                {...formik.getFieldProps("specific_meaning")}
              />
              <Input
                label={'tema relacionado'}
                placeholder={'O que te faz lembrar dessa carta?'}
                labelVariant={'bgLight'}
                variant={'outline'}
                {...formik.getFieldProps("related_theme")}
              />
              <Input
                label={'observações adicionais'}
                placeholder={'O que mais você tem a dizer?'}
                labelVariant={'bgLight'}
                variant={'outline'}
                {...formik.getFieldProps("additional_observation")}
              />
              <Button alignSelf={'left'} isLoading={isLoading} type='submit' w={{ base: '100%', md: 'fit-content' }}>
                Salvar
              </Button>
            </Flex>
          </form>
        </SimpleGrid>
      </MainTemplate>
    </Flex>
  )
}

export default Cards
