import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react'

export interface ButtonProps extends ChakraButtonProps {
  children?: string
  variant?: string
}

export const Button = (props: ButtonProps) => {
  return (
    <ChakraButton variant={props.variant ?? 'primary'} {...props}>
      {props.children}
    </ChakraButton>
  )
}
