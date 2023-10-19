import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
  FormHelperText,
  FormControlProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface SelectProps extends ChakraSelectProps {
  children: ReactNode
  label?: string
  labelVariant?: 'bgDark' | 'bgLight'
  controlProps?: FormControlProps
  errorText?: string
}

export const Select = ({
  children,
  label,
  labelVariant,
  controlProps,
  errorText,
  ...props
}: SelectProps) => {
  return (
    <FormControl flexDir={'column'} isInvalid={Boolean(errorText)} {...controlProps}>
      <FormLabel variant={labelVariant}>{label}</FormLabel>
      <ChakraSelect {...props}>{children}</ChakraSelect>
      {errorText && <FormHelperText color={'red.500'}>{errorText}</FormHelperText>}
    </FormControl>
  )
}
