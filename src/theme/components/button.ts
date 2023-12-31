import { defineStyleConfig } from '@chakra-ui/react'
import colors from '../foundations/colors'

const Button = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    padding: '0.625rem 1rem',
    borderRadius: '4px',
    fontFamily: 'DM Sans',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '16px',
  },
  variants: {
    primary: {
      bgColor: 'primary.default',
      color: 'neutral.white',
      _hover: {
        bgColor: 'primary.hover',
      },
      _loading: {
        _hover: {
          bgColor: 'primary.default',
        },
      },
    },
    secondary: {
      bgColor: 'neutral.white',
      color: 'primary.default',
      border: '1px solid var(--chakra-colors-neutral-black)',
      _hover: {
        bgColor: 'neutral.lightGray',
      },
    },
    rounded: {
      borderRadius: '50px',
      bgColor: 'neutral.white',
      color: 'primary.default',
      _hover: {
        bgColor: 'neutral.lightGray',
      },
    },
  },
  sizes: {
    sm: {
      padding: '5px 16px',
      fontSize: '16px',
    },
    md: {
      padding: '10px 16px',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
})

export default Button
