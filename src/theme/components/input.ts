import { defineStyleConfig } from '@chakra-ui/react'

const Input = defineStyleConfig({
  baseStyle: {
    field: {
      _placeholder: {
        color: 'neutral.darkGray',
      },
    },
  },
})

export default Input
