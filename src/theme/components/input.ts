import { defineStyleConfig } from '@chakra-ui/react'

const Input = defineStyleConfig({
  baseStyle: {
    field: {
      opacity: 1,
      backgroundColor: 'white',
      _placeholder: {
        color: 'neutral.darkGray',
      },
    },
  },
  variants: {
    primary: {
      field: {
        bgColor: 'white',
      },
    },
    outline: {
      field: {
        borderColor: 'primary.default',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
})

export default Input
