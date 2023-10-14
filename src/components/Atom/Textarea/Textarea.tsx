import {
  FormControl,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from '@chakra-ui/react'

export interface TextareaProps extends ChakraTextareaProps {
  label?: string
  labelVariant?: 'bgDark' | 'bgLight'
}

export const Textarea = ({
  children,
  label,
  labelVariant,
  ...props
}: TextareaProps) => {
  return (
    <FormControl>
      <FormLabel variant={labelVariant}>{label}</FormLabel>
      <ChakraTextarea {...props} />
    </FormControl>
  )
}
