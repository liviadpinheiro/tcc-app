import { Flex, Img, SimpleGrid, Text, useToast } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MainTemplate from '../components/Template/MainTemplate'
import { Button } from '../components/Atom/Button'
import { Input } from '../components/Atom/Input'
import * as yup from 'yup'
import { Select } from '../components/Atom/Select'
import { Textarea } from '../components/Atom/Textarea'
import { useState } from 'react'
import { useFormik } from 'formik'
import { createContact } from 'src/service/contact.service'
import { CreateContactDTO } from 'src/interfaces/create-contact.dto'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
  name: yup.string().required('O nome é obrigatório'),
  message: yup.string().required('A mensagem é obrigatória'),
  state: yup.string(),
  theme: yup.string().required('O tema é obrigatório'),
})

const Contact: NextPage = () => {
  const { pathname } = useRouter()
  const toast = useToast()

  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      state: '',
      theme: '',
    },
    validationSchema,
    onSubmit: async (values: CreateContactDTO) => {
      setIsLoading(true)
      try {
        await createContact(values)

        toast({
          title: 'Mensagem enviada.',
          description:
            'Agradecemos pelo feedback! Entraremos em contato em breve.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })

        formik.resetForm()
      } catch (error) {
        toast({
          title: 'Erro! Tente novamente',
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

  return (
    <Flex>
      <Head>
        <title>Contato | Jornada</title>
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
            envie suas dúvidas e feedbacks
          </Text>
          <Text textAlign={'center'} textStyle={'bodyLG'}>
            Nossa dedicada equipe está sempre disponível para responder a todas
            as suas perguntas e ouvir seus comentários. Valorizamos muito a sua
            interação e estamos sempre prontos para atendê-lo!
          </Text>
        </Flex>
        <Flex
          mx={{ base: '-16px', md: '-96px' }}
          flexDir={'column'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Img w="100%" maxH="200px" src="/images/sun-bg.png"></Img>
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
              objectFit={'cover'}
              rounded={'8px'}
              src="/images/contact.jpg"
            />
            <form onSubmit={formik.handleSubmit}>
              <Flex flexDir={'column'} gap={'24px'}>
                <Input
                  label={'E-MAIL'}
                  labelVariant={'bgDark'}
                  placeholder="maria@silva.com"
                  w={'100%'}
                  errorText={
                    formik.touched.email ? formik.errors.email : undefined
                  }
                  {...formik.getFieldProps('email')}
                />
                <Input
                  label={'Nome'}
                  placeholder="Maria"
                  labelVariant={'bgDark'}
                  w={'100%'}
                  variant={'bgDark'}
                  errorText={
                    formik.touched.name ? formik.errors.name : undefined
                  }
                  {...formik.getFieldProps('name')}
                />
                <Select
                  labelVariant={'bgDark'}
                  label={'Assunto'}
                  placeholder={'Selecione um assunto'}
                  errorText={
                    formik.touched.theme ? formik.errors.theme : undefined
                  }
                  {...formik.getFieldProps('theme')}
                >
                  <option value="relato">Relato</option>
                  <option value="suporte">Suporte</option>
                </Select>
                {formik.values.theme === 'relato' ? (
                  <Input
                    label={'Estado'}
                    placeholder="Rio de Janeiro"
                    labelVariant={'bgDark'}
                    w={'100%'}
                    variant={'bgDark'}
                    errorText={
                      formik.touched.state ? formik.errors.state : undefined
                    }
                    {...formik.getFieldProps('state')}
                  />
                ) : null}
                <Textarea
                  label={'Mensagem'}
                  labelVariant={'bgDark'}
                  placeholder={'Escreva sua mensagem'}
                  errorText={
                    formik.touched.message ? formik.errors.message : undefined
                  }
                  {...formik.getFieldProps('message')}
                />
                <Button
                  isLoading={isLoading}
                  type={'submit'}
                  w={'fit-content'}
                  alignSelf={'left'}
                  variant="rounded"
                >
                  Enviar
                </Button>
              </Flex>
            </form>
          </SimpleGrid>
        </Flex>
      </MainTemplate>
    </Flex>
  )
}

export default Contact
