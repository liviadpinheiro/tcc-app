import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface InputProps extends ChakraInputProps {
  label?: string
  placeholder?: string
  rightElement?: ReactNode
  leftElement?: ReactNode
}

export const Input = (props: InputProps) => {
  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <InputGroup>
        {props.leftElement && (
          <InputLeftElement>{props.leftElement}</InputLeftElement>
        )}
        <ChakraInput placeholder={props.placeholder} {...props} />
        {props.rightElement && (
          <InputRightElement>{props.rightElement}</InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  )
}
