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
    fontSize: '16px'
  },
  variants: {
    primary: {
      bgColor: colors.primary.default,
      color: colors.neutral.white,
      _hover: {
        bgColor: colors.primary.hover
      }
    },
    secondary: {
      bgColor: colors.neutral.white,
      color: colors.primary.default,
      border: `1px solid ${colors.neutral.black}`,
      _hover: {
        bgColor: colors.neutral.lightGray
      }
    }
  }
})

export default Button
