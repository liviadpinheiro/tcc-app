import '@fontsource/im-fell-double-pica-sc'
import '@fontsource/dm-sans'

import type { Preview } from '@storybook/react'
import theme from '../src/theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: {
      theme,
    },
  },
}

export default preview
