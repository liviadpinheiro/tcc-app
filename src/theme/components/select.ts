import { defineStyleConfig } from '@chakra-ui/react'

const Select = defineStyleConfig({
  baseStyle: {
    field: {
      opacity: 1,
      backgroundColor: 'white',
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

export default Select
