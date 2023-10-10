import { render, screen } from '../../../utils/test-utils'

import { Testimonial } from '.'

describe('<Testimonial />', () => {
  it('should render the heading', () => {
    render(<Testimonial />)

    expect(screen.getByRole('heading', { name: /Testimonial/i })).toBeInTheDocument()
  })
})
