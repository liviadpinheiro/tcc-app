import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import config from './foundations/config'
import fonts from './foundations/fonts'
import colors from './foundations/colors'
import shadows from './foundations/shadows'
import breakpoints from './foundations/breakpoints'
import textStyles from './foundations/text'


// Component style overrides
import Button from './components/button'
import FormLabel from './components/formLabel'
import Input from './components/input'
import Textarea from './components/textArea'
import Select from './components/select'

const customTheme = {
  styles,
  fonts,
  config,
  colors,
  shadows,
  breakpoints,
  textStyles,
  components: {
    Button,
    FormLabel,
    Input,
    Textarea,
    Select,
  },
}

export default extendTheme(customTheme)
