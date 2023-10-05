import { render, screen } from '../../../utils/test-utils'

import { NAVBAR_VARIANT, Navbar } from '.'

describe('<Navbar />', () => {
  it('should render the heading', () => {
    render(<Navbar variant={NAVBAR_VARIANT.logIn} pathname={'/'} />)

    expect(screen.getByRole('heading', { name: /Navbar/i })).toBeInTheDocument()
  })
})
