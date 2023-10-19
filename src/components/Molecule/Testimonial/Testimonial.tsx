import { Flex, Text } from '@chakra-ui/react'
import { LogoSoloBgLightIcon } from 'public/icons/logo-solo-bg-light'

export interface TestimonialProps {
  state: string
  name: string
  testimonial: string
}

export const Testimonial = ({ state, name, testimonial }: TestimonialProps) => {
  return (
    <Flex
      maxW={{ base: '100%', md: '295px' }}
      outline={'2px solid'}
      outlineColor={'primary.default'}
      rounded={'8px'}
      p={'24px'}
      flexDir={'column'}
      gap={'18px'}
    >
      <Flex gap={'8px'}>
        <LogoSoloBgLightIcon />
        <Flex flexDir={'column'}>
          <Text fontSize={'18px'} lineHeight={'24px'}>
            {name}
          </Text>
          <Text
            fontSize={'14px'}
            lineHeight={'20px'}
            color={'neutral.darkGray'}
          >
            {state}
          </Text>
        </Flex>
      </Flex>
      <Text lineHeight={'24px'} fontSize={'16px'}>
        {testimonial}
      </Text>
    </Flex>
  )
}
