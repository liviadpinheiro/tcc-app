import { render, screen } from '../../../utils/test-utils'

import { Input } from '.'

describe('<Input />', () => {
  it('should render the heading', () => {
    render(<Input />)

    expect(screen.getByRole('heading', { name: /Input/i })).toBeInTheDocument()
  })
})
