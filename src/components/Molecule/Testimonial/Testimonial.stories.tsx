import { StoryFn, Meta } from '@storybook/react'

import { Testimonial } from '.'

export default {
  title: 'Molecule/Testimonial',
  component: Testimonial,
} as Meta

const Template: StoryFn<typeof Testimonial> = (args) => (
  <Testimonial {...args} />
)

export const Default = Template.bind({})

Default.args = {
  name: 'Maria',
  state: 'Rio de Janeiro',
  testimonial:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
}
