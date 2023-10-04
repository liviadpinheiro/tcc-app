import { defineStyleConfig } from "@chakra-ui/react"
import { customCalendarIcon } from "../icons/calendar"

const Input = defineStyleConfig({
  baseStyle: {
    field: {
      _placeholder: {
        color: 'neutral.darkGray',
      }
    }
  },
})

export default Input
