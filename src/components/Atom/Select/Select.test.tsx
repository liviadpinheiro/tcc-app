import { render, screen } from '../../../utils/test-utils'

import { Select } from '.'

describe('<Select />', () => {
  it('should render the heading', () => {
    render(<Select />)

    expect(screen.getByRole('heading', { name: /Select/i })).toBeInTheDocument()
  })
})
