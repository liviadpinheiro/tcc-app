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
  labelVariant?: 'bgDark' | 'bgLight'
}

export const Input = ({
  label,
  placeholder,
  labelVariant,
  leftElement,
  rightElement,
  ...props
}: InputProps) => {
  return (
    <FormControl>
      <FormLabel variant={labelVariant}>{label}</FormLabel>
      <InputGroup>
        {leftElement && <InputLeftElement>{leftElement}</InputLeftElement>}
        <ChakraInput placeholder={placeholder} {...props} />
        {rightElement && <InputRightElement>{rightElement}</InputRightElement>}
      </InputGroup>
    </FormControl>
  )
}
