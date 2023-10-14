import { render, screen } from '../../../utils/test-utils'

import { Textarea } from '.'

describe('<Textarea />', () => {
  it('should render the heading', () => {
    render(<Textarea />)

    expect(screen.getByRole('heading', { name: /Textarea/i })).toBeInTheDocument()
  })
})
