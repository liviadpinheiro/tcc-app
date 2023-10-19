import { defineStyleConfig } from '@chakra-ui/react'

const Textarea = defineStyleConfig({
  baseStyle: {
    opacity: 1,
    backgroundColor: 'white',
    _placeholder: {
      color: 'neutral.darkGray',
    },
  },
  variants: {
    primary: {
      bgColor: 'white',
    },
    outline: {
      borderColor: 'primary.default',
    },
  },
  defaultProps: {
    variant: 'primary',
  },
})

export default Textarea
