import { StoryFn, Meta } from '@storybook/react'

import { Textarea } from '.'

export default {
  title: 'Atom/Textarea',
  component: Textarea
} as Meta

const Template: StoryFn<typeof Textarea> = (args) => <Textarea {...args} />

export const Default = Template.bind({})

Default.args = {}
