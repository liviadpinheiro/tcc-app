import { defineStyleConfig } from "@chakra-ui/react"

const FormLabel = defineStyleConfig({
  baseStyle: {
    textTransform: 'uppercase',
    color: 'neutral.black',
    fontSize: ['12px', '16px'],
    fontFamily: 'DM Sans',
    fontWeight: '500'
  }
})

export default FormLabel
