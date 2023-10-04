import { StoryFn, Meta } from '@storybook/react'

import { Input } from '.'
import { CustomHideIcon } from '../../../../public/icons/hide'

export default {
  title: 'Atom/Input',
  component: Input,
} as Meta

const Template: StoryFn = (args) => <Input {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'E-mail',
  placeholder: 'maria@silva.com',
}

export const Calendar = Template.bind({})

Calendar.args = {
  label: 'Data de Nascimento',
  type: 'date',
}

export const Password = Template.bind({})

Password.args = {
  label: 'Senha',
  type: 'password',
  placeholder: '!S3nha',
  rightElement: CustomHideIcon(),
}
