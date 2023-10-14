import React from 'react';
import { render, screen } from '../../../utils/test-utils'

import { NAVBAR_VARIANT, Navbar } from '.'

describe('<Navbar />', () => {
  it('should render the navbar', () => {
    render(<Navbar variant={NAVBAR_VARIANT.logIn} pathname={'/'} />)

    expect(screen.getByRole('navbar', { name: /Navbar/i })).toBeInTheDocument()
  })
})
