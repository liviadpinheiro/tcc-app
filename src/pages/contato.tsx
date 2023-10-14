import { Flex, Img, SimpleGrid, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import MainTemplate from "../components/Template/MainTemplate"
import { Button } from "../components/Atom/Button"
import { Input } from "../components/Atom/Input"

import { Select } from "../components/Atom/Select"
import { Textarea } from "../components/Atom/Textarea"
import { NAVBAR_VARIANT } from "../components/Organism/Navbar"

const Contact: NextPage = () => {
  const { pathname } = useRouter()
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
      <MainTemplate pathname={pathname} navbarVariant={NAVBAR_VARIANT.signUp}>
        <Flex
          flexDir={'column'}
          maxW={'554px'}
          gap={'8px'}
          alignSelf={'center'}
          pt={{ base: '48px', md: '120px' }}
          pb={{ base: '36px', md: '64px' }}
        >
          <Text
            textStyle={{ base: 'heading2', md: 'heading1'}}
            color={'primary.default'}
            textAlign={{ base: 'left', md: 'center'}}
          >
            envie suas dúvidas e feedbacks
          </Text>
          <Text textStyle={'bodyLG'}>
            Nossa dedicada equipe está sempre disponível para responder a todas as suas perguntas e ouvir seus comentários. Valorizamos muito a sua interação e estamos sempre prontos para atendê-lo!
          </Text>
        </Flex>
        <Flex
          mx={{ base: '-16px', md: '-96px' }}
          flexDir={'column'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={{ base: '24px', md: 'unset' }}
        >
          <Img
            w="100%"
            maxH="200px"
            src="/images/sun-bg.png"
          ></Img>
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
            <Flex flexDir={'column'} gap={'24px'}>
              <Input
                label={'E-MAIL'}
                placeholder="maria@silva.com"
                w={'100%'}
                type={'email'}
              />
              <Input
                label={'Nome'}
                placeholder="Maria"
                w={'100%'}
                variant={'bgDark'}
              />
              <Select label={"Assunto"} placeholder={"Selecione um assunto"}>
                <option value='relato'>Relato</option>
                <option value='suporte'>Suporte</option>
              </Select>
              <Textarea label={'Mensagem'} placeholder={'Escreva sua mensagem'} />
              <Button w={'fit-content'} alignSelf={'left'} variant="rounded">Enviar</Button>
            </Flex>
          </SimpleGrid>
        </Flex>
      </MainTemplate>
    </Flex>
  )
}

export default Contact
