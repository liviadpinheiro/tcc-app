import { Flex, Text, Img, useToast } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MainTemplate from '../components/Template/MainTemplate'
import { NAVBAR_VARIANT } from '../components/Organism/Navbar'
import { Input } from '../components/Atom/Input'
import { useState } from 'react'
import { CustomHideIcon } from '../../public/icons/hide'
import { CustomShowIcon } from '../../public/icons/show'
import Link from 'next/link'
import { Button } from '../components/Atom/Button'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { login } from 'src/service/auth.service'

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
  password: yup
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .required('A senha é obrigatória'),
})

const LogIn: NextPage = () => {
  const router = useRouter()
  const toast = useToast()

  const [isLoading, setIsLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const handleClickPass = () => setShowPass(!showPass)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true)
      try {
        await login(values.email, values.password)
        toast({
          title: 'Login realizado.',
          description: 'Você será redirecionado para a página de anotações.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })

        setTimeout(() => {
          router.push('/anotacoes')
        }, 3100)
      } catch (error) {
        toast({
          title: 'Erro!',
          // @ts-ignore
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })

        setIsLoading(false)
      }
    },
  })

  return (
    <Flex>
      <Head>
        <title>Entrar | Jornada</title>
        <meta
          name="description"
          content="TCC de Página Web sobre Cartomancia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate
        pathname={router.pathname}
        navbarVariant={NAVBAR_VARIANT.default}
        alignItems={'center'}
        h={'100vh'}
        justifyContent={'space-between'}
      >
        <form onSubmit={formik.handleSubmit}>
          <Flex
            alignItems={'center'}
            pt={'48px'}
            pb={{ base: '32px', md: '48px' }}
            gap={{ base: '36px', md: '128px' }}
            flexDir={{ base: 'column-reverse', md: 'row' }}
            w={'100%'}
          >
            <Flex w={'100%'} flex={1} flexDir={'column'} gap={'24px'}>
              <Input
                label={'e-mail'}
                placeholder={'maria@silva.com'}
                labelVariant={'bgLight'}
                variant={'outline'}
                errorText={
                  formik.touched.email ? formik.errors.email : undefined
                }
                {...formik.getFieldProps('email')}
              />
              <Input
                label={'senha'}
                placeholder={'S3nha!'}
                labelVariant={'bgLight'}
                variant={'outline'}
                rightElement={
                  <Flex onClick={handleClickPass}>
                    {showPass ? CustomHideIcon() : CustomShowIcon()}
                  </Flex>
                }
                type={showPass ? 'text' : 'password'}
                errorText={
                  formik.touched.password ? formik.errors.password : undefined
                }
                {...formik.getFieldProps('password')}
              />
              <Flex
                w={'100%'}
                alignItems={{ base: 'unset', md: 'center' }}
                gap={'12px'}
                flexDir={{ base: 'column', md: 'row' }}
              >
                <Button
                  isLoading={isLoading}
                  type={'submit'}
                  w={{ base: '100%', md: 'fit-content' }}
                >
                  Entrar
                </Button>
                <Link href={'/cadastrar'}>
                  <Button
                    w={{ base: '100%', md: 'fit-content' }}
                    variant="secondary"
                  >
                    Ir para cadastro
                  </Button>
                </Link>
                <Flex alignSelf={'center'}>
                  <Link href={'/esqueci-minha-senha'}>
                    <Text
                      textStyle={'bodySM'}
                      textDecor={'underline'}
                      color={'primary.default'}
                    >
                      Esqueci minha senha
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              flex={1}
              alignItems={'center'}
              flexDir={'column'}
              gap={{ base: '36px', md: '32px' }}
            >
              <Text
                textStyle={{ base: 'heading2', md: 'heading3' }}
                color={'primary.default'}
                textAlign={'center'}
              >
                que bom te ver de novo!
              </Text>
              <Img
                src={'/images/login.jpg'}
                w={'100%'}
                h={'100%'}
                objectFit={'cover'}
                rounded={'8px'}
              />
            </Flex>
          </Flex>
        </form>
      </MainTemplate>
    </Flex>
  )
}

export default LogIn
