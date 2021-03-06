import React from 'react'
import { render } from 'testing-library'

import PopoverContent from './PopoverContent'

describe('PopoverContent', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  it('shows the arrow', () => {
    const { queryByTestId } = render(
      <PopoverContent renderContent={() => 'Content'} />
    )
    expect(queryByTestId('popover-arrow')).toBeInTheDocument()
  })

  it('hides the arrow', () => {
    const { queryByTestId } = render(
      <PopoverContent hideArrow renderContent={() => 'Content'} />
    )
    expect(queryByTestId('popover-arrow')).not.toBeInTheDocument()
  })
})
