import { Flex, SimpleGrid, Text, Img } from "@chakra-ui/react"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import MainTemplate from "../components/Template/MainTemplate"
import { NAVBAR_VARIANT } from "../components/Organism/Navbar"
import { Input } from "../components/Atom/Input"
import { useState } from "react"
import { CustomHideIcon } from "../../public/icons/hide"
import { CustomShowIcon } from "../../public/icons/show"
import Link from "next/link"
import { Button } from "../components/Atom/Button"

const SignUp: NextPage = () => {
  const [showPass, setShowPass] = useState(false)
  const handleClickPass = () => setShowPass(!showPass)

  const { pathname } = useRouter()

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
      <MainTemplate pathname={pathname} navbarVariant={NAVBAR_VARIANT.default}>
      <Flex
        alignItems={'center'}
        pt={'48px'}
        pb={{ base: '32px', md: '48px' }}
        gap={{ base: '36px', md: '128px' }}
        flexDir={{ base: 'column-reverse', md: 'row'}}
        w={"100%"}
      >
          <Flex w={'100%'} flex={1} flexDir={'column'} gap={'24px'}>
            <Input
              label={'e-mail'}
              placeholder={'maria@silva.com'}
              labelVariant={'bgLight'}
              variant={'outline'}
              type={'email'}
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
            />
            <Flex w={'100%'} alignItems={{ base: 'unset', md: 'center'}} gap={'12px'} flexDir={{ base: 'column', md: 'row' }}>
              <Link href={'/'}>
                <Button w={{ base: '100%', md: 'fit-content' }}>
                  Entrar
                </Button>
              </Link>
              <Link href={'/cadastrar'}>
                <Button w={{ base: '100%', md: 'fit-content' }} variant="secondary">
                  Ir para cadastro
                </Button>
              </Link>
              <Flex alignSelf={'center'}>
                <Link href={'/esqueci-minha-senha'}>
                  <Text textStyle={'bodySM'} textDecor={'underline'} color={'primary.default'}>
                    Esqueci minha senha
                  </Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex flex={1} alignItems={'center'} flexDir={'column'} gap={{ base: '36px', md: '32px' }}>
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
      </MainTemplate>
    </Flex>
  )
}

export default SignUp
