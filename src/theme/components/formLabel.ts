import { defineStyleConfig } from '@chakra-ui/react'

const FormLabel = defineStyleConfig({
  baseStyle: {
    textTransform: 'uppercase',
    fontSize: '16px',
    fontFamily: 'DM Sans',
    fontWeight: '500',
  },
  variants: {
    bgDark: {
      color: 'neutral.white',
    },
    bgLight: {
      color: 'neutral.black',
    },
  },
  defaultProps: {
    variant: 'bgDark',
  },
})

export default FormLabel
