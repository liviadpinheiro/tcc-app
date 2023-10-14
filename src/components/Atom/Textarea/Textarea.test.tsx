import React from 'react';
import { render, screen } from '../../../utils/test-utils'

import { Textarea } from '.'

describe('<Textarea />', () => {
  it('should render the textarea', () => {
    render(<Textarea />)

    expect(screen.getByRole('textarea', { name: /Textarea/i })).toBeInTheDocument()
  })
})
