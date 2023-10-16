import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  FormControlProps,
  FormHelperText,
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import ReactInputMask from 'react-input-mask'

export interface InputProps extends ChakraInputProps {
  label?: string
  rightElement?: ReactNode
  leftElement?: ReactNode
  labelVariant?: 'bgDark' | 'bgLight'
  controlProps?: FormControlProps
  mask?: string | (string | RegExp)[]
  errorText?: string
}

export const Input = ({
  label,
  labelVariant,
  leftElement,
  rightElement,
  controlProps,
  errorText,
  mask,
  ...props
}: InputProps) => {
  return (
    <FormControl isInvalid={Boolean(errorText)} {...controlProps}>
      <FormLabel variant={labelVariant}>{label}</FormLabel>
      <InputGroup flexDir={'column'}>
        {leftElement && <InputLeftElement>{leftElement}</InputLeftElement>}
          {mask ? (
            <ReactInputMask mask={mask} {...props}>
              {(inputProps: InputProps) => <ChakraInput {...inputProps} />}
            </ReactInputMask>
          ) : (
            <ChakraInput {...props} />
          )}
        {errorText && <FormHelperText color={'red.500'}>{errorText}</FormHelperText>}
        {rightElement && <InputRightElement>{rightElement}</InputRightElement>}
      </InputGroup>
    </FormControl>
  )
}
