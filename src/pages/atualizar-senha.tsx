import { Flex, Text, useToast } from "@chakra-ui/react"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import MainTemplate from "../components/Template/MainTemplate"
import { Input } from "src/components/Atom/Input"
import { Button } from "src/components/Atom/Button"
import { useFormik } from "formik"
import * as yup from 'yup'
import { useState } from "react"
import { updatePassword } from "src/service/user.service"
import { CustomHideIcon } from "public/icons/hide"
import { CustomShowIcon } from "public/icons/show"
import { NAVBAR_VARIANT } from "src/components/Organism/Navbar"

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .required('A senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'As senhas devem corresponder')
    .required('A confirmação de senha é obrigatória'),
})

const AtualizarSenha: NextPage = () => {
  const router = useRouter()
  const toast = useToast()

  const [isLoading, setIsLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [showConfPass, setShowConfPass] = useState(false)
  const handleClickPass = () => setShowPass(!showPass)
  const handleClickConfPass = () => setShowConfPass(!showConfPass)

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { token } = router.query;
        await updatePassword(token as string ?? '', values.password)

        toast({
          title: 'Atualização realizada.',
          description: 'Você será redirecionado para a página de login.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })

        setTimeout(() => {
          router.push('/entrar')
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
        <title>Atualizar Senha | Jornada</title>
        <meta
          name="description"
          content="TCC de Página Web sobre Cartomancia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate pathname={router.pathname} navbarVariant={NAVBAR_VARIANT.default} alignItems={'center'} h={'100vh'} justifyContent={'space-between'}>
      <Flex gap={{ base: '36px', md: '24px' }} w={'100%'} h={'100%'} flexDir={'column'} maxW={'936px'} alignItems={'center'}>
          <Text color={'primary.default'} textStyle={{ base: 'heading2', md: 'heading1' }}>recupere sua senha</Text>
          <form onSubmit={formik.handleSubmit}>
            <Flex flexDir={'column'} gap={'24px'}>
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
                errorText={
                  formik.touched.confirmPassword
                    ? formik.errors.confirmPassword
                    : undefined
                }
                {...formik.getFieldProps('confirmPassword')}
              />
              <Flex alignItems={'center'} gap={'12px'}>
                <Button onClick={() => setIsLoading(true)} isLoading={isLoading} type={'submit'}>Atualizar senha</Button>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </MainTemplate>
    </Flex>
  )
}

export default AtualizarSenha
