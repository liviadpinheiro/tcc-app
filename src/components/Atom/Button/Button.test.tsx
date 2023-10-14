import React from 'react';
import { render, screen } from '../../../utils/test-utils'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    render(<Button />)

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument()
  })
})

