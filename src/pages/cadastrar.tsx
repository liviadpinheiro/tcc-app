import { Flex, SimpleGrid, Text, Img, useToast } from '@chakra-ui/react'
import MainTemplate from '../components/Template/MainTemplate'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { NAVBAR_VARIANT } from '../components/Organism/Navbar'
import { Input } from '../components/Atom/Input'
import { CustomHideIcon } from '../../public/icons/hide'
import { useState } from 'react'
import { CustomShowIcon } from '../../public/icons/show'
import Link from 'next/link'
import { Button } from '../components/Atom/Button'
import * as yup from "yup"
import { CreateUserDTO } from 'src/interfaces/create-user.dto'
import { useFormik } from 'formik'
import { createUser } from 'src/service/user.service'

const validationSchema = yup.object().shape({
  fullName: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("O e-mail é obrigatório"),
  confirmEmail: yup.string()
    .oneOf([yup.ref('email'), undefined], 'Os emails devem corresponder')
    .required("A confirmação de email é obrigatória"),
  birthdate: yup.date()
    .max(new Date(), "A data de nascimento não pode ser no futuro")
    .required("A data de nascimento é obrigatória"),
  cpf: yup.string().length(14, "O CPF deve ter 11 números").required("O CPF é obrigatório"),
  password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("A senha é obrigatória"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), undefined], 'As senhas devem corresponder')
    .required("A confirmação de senha é obrigatória"),
})

const SignUp: NextPage = () => {
  const router = useRouter()
  const toast = useToast()

  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false)
  const [showConfPass, setShowConfPass] = useState(false)
  const handleClickPass = () => setShowPass(!showPass)
  const handleClickConfPass = () => setShowConfPass(!showConfPass)

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      confirmEmail: '',
      birthdate: undefined,
      cpf: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values: CreateUserDTO) => {
      setIsLoading(true)
      try {
        await createUser(values)

        toast({
          title: 'Cadastro realizado.',
          description: "Você será redirecionado para a página de login.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })

        setTimeout(() => {
          router.push('/entrar');
        }, 3100);
      } catch (error) {
        toast({
          title: "Erro!",
          // @ts-ignore
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });

        setIsLoading(false)
      }
    },
  });

  return (
    <Flex>
      <Head>
        <title>Cadastrar | Jornada</title>
        <meta
          name="description"
          content="TCC de Página Web sobre Cartomancia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate pathname={router.pathname} navbarVariant={NAVBAR_VARIANT.default}>
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          alignItems={'center'}
          pt={'48px'}
          pb={{ base: '32px', md: '48px' }}
          gap={{ base: '36px', md: '128px' }}
        >
          <Flex
            alignItems={'center'}
            flexDir={'column'}
            gap={{ base: '36px', md: '32px' }}
          >
            <Text
              textStyle={{ base: 'heading2', md: 'heading3' }}
              color={'primary.default'}
              textAlign={'center'}
            >
              prepare-se para iniciar sua jornada
            </Text>
            <Img
              src={'/images/signup.jpg'}
              w={'100%'}
              h={'100%'}
              objectFit={'cover'}
              rounded={'8px'}
            />
          </Flex>
          <form onSubmit={formik.handleSubmit}>
            <Flex flexDir={'column'} gap={'24px'}>
              <Input
                label={'Nome completo'}
                placeholder={'Maria Silva'}
                labelVariant={'bgLight'}
                variant={'outline'}
                errorText={formik.touched.fullName ? formik.errors.fullName : undefined}
                {...formik.getFieldProps("fullName")}
              />
              <Input
                label={'e-mail'}
                placeholder={'maria@silva.com'}
                labelVariant={'bgLight'}
                variant={'outline'}
                errorText={formik.touched.email  ? formik.errors.email : undefined}
                {...formik.getFieldProps("email")}
              />
              <Input
                label={'confirmar e-mail'}
                placeholder={'maria@silva.com'}
                labelVariant={'bgLight'}
                variant={'outline'}
                errorText={formik.touched.confirmEmail  ? formik.errors.confirmEmail : undefined}
                {...formik.getFieldProps("confirmEmail")}
              />
              <Input
                label={'cpf'}
                placeholder={'000.000.000-00'}
                labelVariant={'bgLight'}
                variant={'outline'}
                mask={'999.999.999-99'}
                errorText={formik.touched.cpf  ? formik.errors.cpf : undefined}
                {...formik.getFieldProps("cpf")}
              />
              <Input
                label={'Data de nascimento'}
                labelVariant={'bgLight'}
                type={'date'}
                variant={'outline'}
                errorText={formik.touched.birthdate  ? formik.errors.birthdate : undefined}
                {...formik.getFieldProps("birthdate")}
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
                errorText={formik.touched.password  ? formik.errors.password : undefined}
                {...formik.getFieldProps("password")}
              />
              <Input
                label={'confirmar senha'}
                placeholder={'******'}
                labelVariant={'bgLight'}
                rightElement={
                  <Flex onClick={handleClickConfPass}>
                    {showConfPass ? CustomHideIcon() : CustomShowIcon()}
                  </Flex>
                }
                variant={'outline'}
                type={showConfPass ? 'text' : 'password'}
                errorText={formik.touched.confirmPassword  ? formik.errors.confirmPassword : undefined}
                {...formik.getFieldProps("confirmPassword")}
              />
              <Flex gap={'12px'} flexDir={{ base: 'column', md: 'row' }}>
                <Button isLoading={isLoading} type='submit' w={{ base: '100%', md: 'fit-content' }}>
                  Criar conta
                </Button>
                <Link href={'/entrar'}>
                  <Button
                    w={{ base: '100%', md: 'fit-content' }}
                    variant="secondary"
                  >
                    Ir para login
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </form>
        </SimpleGrid>
      </MainTemplate>
    </Flex>
  )
}

export default SignUp
