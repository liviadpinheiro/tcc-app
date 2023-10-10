import { StoryFn, Meta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Atom/Button',
  component: Button,
} as Meta

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Button',
  variant: 'primary',
  size: 'md',
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'Button',
  variant: 'secondary',
  size: 'md',
}

export const Rounded = Template.bind({})

Rounded.args = {
  children: 'Button',
  variant: 'rounded',
  size: 'sm',
}
