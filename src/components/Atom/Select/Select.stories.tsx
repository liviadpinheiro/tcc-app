import { StoryFn, Meta } from '@storybook/react'

import { Select } from '.'

export default {
  title: 'Atom/Select',
  component: Select
} as Meta

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})

Default.args = {
  placeholder: 'Selecione...',
  label: 'Selecione',
  children: (
    <>
      <option value='opcao1'>Opção 1</option>
      <option value='opcao2'>Opção 2</option>
      <option value='opcao3'>Opção 3</option>
    </>
  ),
  variant: 'outline',
}
