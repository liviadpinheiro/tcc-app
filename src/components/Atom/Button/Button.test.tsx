import { render, screen } from '../../../utils/test-utils'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    render(<Button />)

    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()
  })
})
