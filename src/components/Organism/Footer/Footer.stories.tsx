import { StoryFn, Meta } from '@storybook/react'

import { Footer } from '.'

export default {
  title: 'Organism/Footer',
  component: Footer,
} as Meta

const Template: StoryFn = (args) => <Footer {...args} />

export const Default = Template.bind({})

Default.args = {}
