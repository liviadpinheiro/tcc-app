import { Badge, Flex, Text, useToast } from "@chakra-ui/react"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import MainTemplate from "../components/Template/MainTemplate"
import { NAVBAR_VARIANT } from "src/components/Organism/Navbar"
import { Input } from "src/components/Atom/Input"
import { Button } from "src/components/Atom/Button"
import * as yup from 'yup'
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { recoverPassword } from "src/service/user.service"

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('O e-mail é obrigatório'),
})

const ForgotMyPassword: NextPage = () => {
  const { pathname } = useRouter()
  const toast = useToast()

  const [isDisabled, setIsDisabled] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      startTimer()
      try {
        await recoverPassword(values)

        toast({
          title: 'E-mail enviado.',
          description: 'Aguarde o recebimento e verifique a caixa de spam.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } catch (error) {
        toast({
          title: 'Erro!',
          // @ts-ignore
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    },
  })

  useEffect(() => {
    if (timeLeft === 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => Math.max(prevTimeLeft - 1, 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsDisabled(false);
    }
  }, [timeLeft]);

  const startTimer = () => {
    setIsDisabled(true);
    setTimeLeft(120);
  };

  return (
    <Flex>
      <Head>
        <title>Recuperar Senha | Jornada</title>
        <meta
          name="description"
          content="TCC de Página Web sobre Cartomancia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTemplate pathname={pathname} navbarVariant={NAVBAR_VARIANT.default} alignItems={'center'} h={'100vh'} justifyContent={'space-between'}>
        <Flex gap={{ base: '36px', md: '24px' }} w={'100%'} h={'100%'} flexDir={'column'} maxW={'936px'} alignItems={'center'}>
          <Text color={'primary.default'} textStyle={{ base: 'heading2', md: 'heading1' }}>recupere sua senha</Text>
          <form onSubmit={formik.handleSubmit}>
            <Flex flexDir={'column'} gap={'24px'}>
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
              <Flex alignItems={'center'} gap={'12px'}>
                <Button isDisabled={isDisabled} type={'submit'}>Enviar</Button>
                <Text textStyle={'bodySM'}>Se o e-mail de recuperação não chegar, aguarde para reenvia-lo</Text>
                <Badge textAlign={'center'} w={'56px'} fontSize={'14px'}>
                  {Math.floor(timeLeft / 60).toString().padStart(2, '0')}:
                  {(timeLeft % 60).toString().padStart(2, '0')}
                </Badge>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </MainTemplate>
    </Flex>
  )
}

export default ForgotMyPassword
