import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import config from './foundations/config'
import fonts from './foundations/fonts'
import colors from './foundations/colors'
import shadows from './foundations/shadows'
import breakpoints from './foundations/breakpoints'

// Component style overrides
import Button from './components/button'
import FormLabel from './components/formLabel'
import Input from './components/input'

const customTheme = {
  styles,
  fonts,
  config,
  colors,
  shadows,
  breakpoints,
  components: {
    Button,
    FormLabel,
    Input,
  },
}

export default extendTheme(customTheme)
