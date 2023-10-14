import React from 'react';
import { render, screen } from '../../../utils/test-utils'

import { Select } from '.'

describe('<Select />', () => {
  it('should render the select', () => {
    render(<Select><option value="teste">Teste</option></Select>)

    expect(screen.getByRole('select', { name: /Select/i })).toBeInTheDocument()
  })
})
