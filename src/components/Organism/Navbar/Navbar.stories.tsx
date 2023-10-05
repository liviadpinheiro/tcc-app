import { StoryFn, Meta } from '@storybook/react'

import { NAVBAR_VARIANT, Navbar } from '.'

export default {
  title: 'Organism/Navbar',
  component: Navbar,
} as Meta

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Template.bind({})

Default.args = {
  pathname: '/',
  variant: NAVBAR_VARIANT.default,
}

export const SignUp = Template.bind({})

SignUp.args = {
  pathname: '/',
  variant: NAVBAR_VARIANT.signUp,
}

export const LogIn = Template.bind({})

LogIn.args = {
  pathname: '/',
  variant: NAVBAR_VARIANT.logIn,
  userName: 'Maria Silva',
}
