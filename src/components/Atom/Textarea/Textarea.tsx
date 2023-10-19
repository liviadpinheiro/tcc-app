import {
  FormControl,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  FormControlProps,
  FormHelperText,
} from '@chakra-ui/react'

export interface TextareaProps extends ChakraTextareaProps {
  label?: string
  labelVariant?: 'bgDark' | 'bgLight'
  controlProps?: FormControlProps
  errorText?: string
}

export const Textarea = ({
  children,
  label,
  labelVariant,
  controlProps,
  errorText,
  ...props
}: TextareaProps) => {
  return (
    <FormControl flexDir={'column'} isInvalid={Boolean(errorText)} {...controlProps}>
      <FormLabel variant={labelVariant}>{label}</FormLabel>
      <ChakraTextarea {...props} />
      {errorText && <FormHelperText color={'red.500'}>{errorText}</FormHelperText>}
    </FormControl>
  )
}
