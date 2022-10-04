import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './header'
import 'src/assets/urbanos-logo.png'

describe('Header', () => {
  window.BASE_URL = 'testBaseUrl'
  window.LOGO_URL = 'testLogoSrc'
  window.HEADER_TITLE = 'testHeaderTitle'

  test('contains clickable logo', () => {
    render(<Header />)

    const headerLogo = screen.getByAltText('header-logo')

    expect(headerLogo.closest('a')).toHaveAttribute('href', 'testBaseUrl')
    expect(headerLogo).toHaveAttribute('src', 'testLogoSrc')
    expect(headerLogo).toHaveAttribute('alt', 'header-logo')
  })

  test('uses backup logo when initial image src fails', () => {
    render(<Header />)

    const headerLogo = screen.getByAltText('header-logo')
    fireEvent.error(headerLogo)

    // test-file-stub is returned by image-mock.js in place of the imported image
    expect(headerLogo).toHaveAttribute('src', 'test-file-stub')
    expect(headerLogo).toHaveAttribute('alt', 'default-header-logo')
  })

  test('contains header title', () => {
    render(<Header />)

    expect(screen.getByText('testHeaderTitle')).toBeInTheDocument()
  })

  test('contains explore link', () => {
    render(<Header />)

    const exploreLink = screen.getByText('EXPLORE DATA')
    expect(exploreLink).toHaveAttribute('href', '/')
  })

  test('contains about link', () => {
    render(<Header />)

    const aboutLink = screen.getByText('ABOUT URBAN OS')

    expect(aboutLink).toHaveAttribute('href', '/')
  })
})
