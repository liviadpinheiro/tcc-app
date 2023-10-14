import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface SelectProps extends ChakraSelectProps {
  children: ReactNode
  label: string
  labelVariant?: 'bgDark' | 'bgLight'
}

export const Select = ({
  children,
  label,
  labelVariant,
  ...props
}: SelectProps) => {
  return (
    <FormControl>
      <FormLabel variant={labelVariant}>{label}</FormLabel>
      <ChakraSelect {...props}>{children}</ChakraSelect>
    </FormControl>
  )
}
