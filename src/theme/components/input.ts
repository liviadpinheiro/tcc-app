import { defineStyleConfig } from '@chakra-ui/react'

const Input = defineStyleConfig({
  baseStyle: {
    bgColor: 'neutral.white',
    field: {
      _placeholder: {
        color: 'neutral.darkGray',
      },
    },
  },
})

export default Input
