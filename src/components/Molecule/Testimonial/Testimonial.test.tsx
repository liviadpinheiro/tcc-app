import React from 'react';
import { render, screen } from '../../../utils/test-utils'

import { Testimonial } from '.'

describe('<Testimonial />', () => {
  it('should render the testimonial', () => {
    render(<Testimonial picture={''} state={''} name={''} testimonial={''} />)

    expect(screen.getByRole('testimonial', { name: /Testimonial/i })).toBeInTheDocument()
  })
})
