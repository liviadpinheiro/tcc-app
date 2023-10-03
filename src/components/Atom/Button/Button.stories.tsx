import { Story, Meta } from '@storybook/react/types-6-0'

import { Button } from './Button'

export default {
  title: 'Atom/Button',
  component: Button
} as Meta

const Template: Story<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  text: 'Button'
}
