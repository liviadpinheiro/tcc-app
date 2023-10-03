import { Button as ChakraButton } from '@chakra-ui/react'
import { HTMLChakraProps } from '@chakra-ui/system'

export interface ButtonProps extends HTMLChakraProps<'button'> {
  text?: string
  variant?: string
}

export const Button = (props: ButtonProps) => {
  return <ChakraButton variant={props.variant ?? 'primary'} {...props}>{props.text}</ChakraButton>
}
