import { defineStyleConfig } from '@chakra-ui/react'

const FormLabel = defineStyleConfig({
  baseStyle: {
    textTransform: 'uppercase',
    fontSize: ['12px', '12px', '16px', '16px'],
    fontFamily: 'DM Sans',
    fontWeight: '500',
  },
  variants: {
    bgDark: {
      color: 'neutral.white'
    },
    bgLight: {
      color: 'neutral.black',
    }
  },
  defaultProps: {
    variant: 'bgDark',
  },
})

export default FormLabel
