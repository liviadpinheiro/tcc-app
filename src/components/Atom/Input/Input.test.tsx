import React from 'react'
import { render, screen } from '../../../utils/test-utils'

import { Input } from '.'

describe('<Input />', () => {
  it('should render the input', () => {
    render(<Input />)

    expect(screen.getByRole('input', { name: /Input/i })).toBeInTheDocument()
  })
})
