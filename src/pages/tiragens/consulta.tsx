import {
  Box,
  Flex,
  Modal,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useToast,
  ModalContent,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MainTemplate from '../../components/Template/MainTemplate'
import { useSpreadStore } from 'src/stores/spread.store'
import { Input } from 'src/components/Atom/Input'
import { Button } from 'src/components/Atom/Button'
import { Textarea } from 'src/components/Atom/Textarea'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { ArrowUpIcon } from 'public/icons/arrow-up'
import { ISpread } from 'src/interfaces/spread.entity'
import { generateSpreadPDF } from 'src/service/spread.service'
import { CreateSpreadDTO } from 'src/interfaces/create-spread.dto'
import { resizeImage } from 'src/utils/resize-image'
import { convertImageToBase64 } from 'src/utils/image-to-base64'

const PDFModal = ({ pdfBlob, isOpen, onClose }: { pdfBlob: Blob | null, isOpen: boolean, onClose: () => void }) => {
  const downloadPDF = () => {
    if (pdfBlob) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(pdfBlob);
      link.download = 'tiragem.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>PDF Gerado com Sucesso!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Agora você pode fazer o download do arquivo com os dados da sua tiragem ou enviar diretamente para o e-mail do cliente que foi inserido nos dados iniciais da consulta.
            </ModalBody>
            <ModalFooter gap={'16px'}>
                <Button variant='primary' onClick={downloadPDF}>
                    Fazer Download
                </Button>
                <Button variant="secondary">
                    Enviar por e-mail
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
);
}

const validationSchema = yup.object().shape({
  spreadOverview: yup.string().required('O resumo é obrigatório'),
  cardsNumber: yup.number().min(1, 'O jogo deve ter pelo menos uma carta'),
  image: yup.string(),
  cards: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Nome da carta é obrigatório'),
      position: yup.string().required('Posição na tiragem é obrigatória'),
      meaning: yup.string().required('Significado é obrigatório')
    })
  ).required('Insira as informações das cartas')
})

const Consulta: NextPage = () => {
  const { pathname } = useRouter()
  const toast = useToast()

  const { spreadInfo } = useSpreadStore()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [file, setFile] = useState<string | undefined>("")
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];

    if (!file) return

    const resizedImage = await resizeImage(file)
    const base64Image = await convertImageToBase64(resizedImage)

    setFile(base64Image);
    formik.setFieldValue('image', base64Image);
  };

  const formik = useFormik<ISpread>({
    initialValues: {
      spreadOverview: '',
      cardsNumber: 1,
      image: '',
      cards: []
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true)
      try {
        const req: CreateSpreadDTO = {
          consultantName: spreadInfo.consultantName,
          consultantBirthdate: spreadInfo.consultantBirthdate,
          deck: spreadInfo.deck,
          theme: spreadInfo.theme,
          spread: spreadInfo. spread,
          spreadOverview: values.spreadOverview,
          image: values.image,
          cards: values.cards
        }

        const pdf = await generateSpreadPDF(req)

        setPdfBlob(pdf)
        setIsOpen(true)
      } catch (error) {
        toast({
          title: 'Erro!',
          // @ts-ignore
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      } finally {
        setIsLoading(false)
      }
    },
  })

  const renderCardFields = () => {
    const cardFields = [];

    for (let i = 0; i < formik.values.cardsNumber; i++) {
      cardFields.push(
        <Flex flexDir={'column'} key={i} mt={4} gap={'12px'}>
          <Text color={'primary.default'} textStyle={'heading4'}>{`Carta ${i + 1}`}</Text>
          <Input
            label="Nome da Carta"
            labelVariant={'bgLight'}
            variant={'outline'}
            placeholder={'A Estrela'}
            errorText={
              formik.touched.cards && formik.errors.cards && formik.errors.cards[i] ? formik.errors.cards[i].name : undefined
            }
            {...formik.getFieldProps(`cards.${i}.name`)}
          />
          <Input
            label="Posição na Tiragem"
            labelVariant={'bgLight'}
            variant={'outline'}
            placeholder={'Esperanças e temores'}
            errorText={
              formik.touched.cards && formik.errors.cards && formik.errors.cards[i] ? formik.errors.cards[i]?.position : undefined
            }
            {...formik.getFieldProps(`cards.${i}.position`)}
          />
          <Textarea
            label="Significado"
            labelVariant={'bgLight'}
            variant={'outline'}
            placeholder={'O que essa carta tem a dizer para o consulente?'}
            errorText={
              formik.touched.cards && formik.errors.cards && formik.errors.cards[i] ? formik.errors.cards[i]?.meaning : undefined
            }
            {...formik.getFieldProps(`cards.${i}.meaning`)}
          />
        </Flex>
      );
    }

    return cardFields;
  };

  useEffect(() => {
  const newCards = [...Array(formik.values.cardsNumber)].map((_, i) =>
    formik.values.cards[i] || { name: '', position: '', meaning: '' }
  );

  formik.setFieldValue('cards', newCards);
}, [formik.values.cardsNumber]);


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
        <form onSubmit={formik.handleSubmit}>
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          alignItems={'top'}
          pt={'48px'}
          pb={{ base: '32px', md: '48px' }}
          gap={{ base: '36px', md: '128px' }}
        >
          <Flex
            alignItems={'center'}
            width={'100%'}
            flexDir={'column'}
            justifySelf={'center'}
            gap={{ base: '36px', md: '32px' }}
            maxW={{ base: '100%', sm: '338px'}}
          >
            <Text
              textStyle={{ base: 'heading2', md: 'heading3' }}
              color={'primary.default'}
              textAlign={'center'}
            >
              respire.<br/>se concentre.<br/>deixe a intuição fluir.
            </Text>
            <Flex w={'100%'} h={'100%'}>
              <Box
                w="100%"
                h={'376px'}
                maxH={'376px'}
                bgColor="primary.default"
                borderRadius="8px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                _hover={{
                  cursor: 'pointer',
                }}
                bgGradient={
                  'linear-gradient(90deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%, rgba(0, 0, 0, 0.00) 100%), #73086C'
                }
                p={'12px'}
              >
                <Box
                  w="100%"
                  h="100%"
                  border="2px dashed"
                  borderColor={'neutral.white'}
                ></Box>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{
                    opacity: 0,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    cursor: 'pointer',
                  }}
                />
                <Text textStyle={'bodyLG'} color="neutral.white" position="absolute" maxW={'160px'} textAlign={'center'}>
                  {file ? 'Imagem importada com sucesso!' : 'Importar imagem da tiragem'}
                </Text>
                <Box position={'absolute'} mt="24px" top="50%">
                  {!file && <ArrowUpIcon />}
                </Box>
              </Box>
            </Flex>
          </Flex>
            <Flex flexDir={'column'} gap={'24px'}>
              <Textarea
                label={'Resumo da Consulta'}
                placeholder={'Breve descrição da questão e resposta'}
                labelVariant={'bgLight'}
                variant={'outline'}
                errorText={
                  formik.touched.spreadOverview ? formik.errors.spreadOverview : undefined
                }
                {...formik.getFieldProps('spreadOverview')}
              />
              <Input
                label={'Número de cartas'}
                min={1}
                max={78}
                inputMode={'numeric'}
                style={{ MozAppearance: 'textfield' }}
                labelVariant={'bgLight'}
                variant={'outline'}
                w={'100%'}
                type="number"
                errorText={
                  formik.touched.cardsNumber ? formik.errors.cardsNumber : undefined
                }
                {...formik.getFieldProps('cardsNumber')}
              />
              {renderCardFields()}
              <Flex flexDir={{ base: 'column', md: 'row' }}>
                <Button
                  isLoading={isLoading}
                  type="submit"
                  w={{ base: '100%', md: 'fit-content' }}
                >
                  Gerar PDF
                </Button>
                <PDFModal pdfBlob={pdfBlob} isOpen={isOpen} onClose={() => setIsOpen(false)} />
              </Flex>
            </Flex>
        </SimpleGrid>
        </form>
      </MainTemplate>
    </Flex>
  )
}

export default Consulta
