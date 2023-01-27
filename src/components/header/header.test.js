import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './header'
import 'src/assets/urbanos-logo.png'

describe('Header', () => {
  window.DISC_UI_URL = 'testBaseUrl'
  window.LOGO_URL = 'testLogoSrc'
  window.HEADER_TITLE = 'testHeaderTitle'

  test('contains clickable logo', () => {
    render(<Header />)

    const headerLogo = screen.getByAltText('testHeaderTitle logo')

    expect(headerLogo.closest('a')).toHaveAttribute('href', 'testBaseUrl')
    expect(headerLogo).toHaveAttribute('src', 'testLogoSrc')
    expect(headerLogo).toHaveAttribute('alt', 'testHeaderTitle logo')
  })

  test('uses backup logo when initial image src fails', () => {
    render(<Header />)

    const headerLogo = screen.getByAltText('testHeaderTitle logo')
    fireEvent.error(headerLogo)

    // test-file-stub is returned by image-mock.js in place of the imported image
    expect(headerLogo).toHaveAttribute('src', 'test-file-stub')
    expect(headerLogo).toHaveAttribute('alt', 'default-header-logo')
  })

  test('contains header title', () => {
    render(<Header />)

    expect(screen.getByText('testHeaderTitle')).toBeInTheDocument()
  })
})
