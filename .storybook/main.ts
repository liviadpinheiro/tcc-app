import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  stories: [
    '../src/pages/**/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@chakra-ui/storybook-addon',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
    'storybook-css-modules-preset',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  refs: {
    '@chakra-ui/react': { disable: true },
  },
  webpackFinal: async (config) => {
    if (!config.resolve) {
      config.resolve = {}
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '/assets': path.resolve(__dirname, '../public/assets'),
    }
    config.resolve.fallback = {
      querystring: false,
      path: false,
    }

    return config
  },
}

export default config
