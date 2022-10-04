import './header.scss'
import React, { useState } from 'react'
import urbanosLogo from '../../assets/urbanos-logo.png'

const Header = () => {
  const [imageLoadError, setImageLoadError] = useState(false)

  const handleImageLoadError = (e) => {
    if (!imageLoadError) {
      setImageLoadError(false)
      e.target.src = urbanosLogo
      e.target.alt = 'default-header-logo'
    }
  }

  const navBar = () => {
    return (
      <div
        className='nav-wrapper pinned'
      >
        <div className='page-header'>
          <div className='logo'>
            <a href={`${window.BASE_URL}`}>
              <img
                src={`${window.LOGO_URL}`}
                alt='header-logo'
                onError={handleImageLoadError}
              />
            </a>
          </div>
          <span className='title'>{`${window.HEADER_TITLE}`}</span>
        </div>
        <div className='nav-element-container'>
          <a
            className='nav-element blue'
            href='/'
          >
            EXPLORE DATA
          </a>
          <a className='nav-element' href='/'>
            ABOUT URBAN OS
          </a>
        </div>
      </div>
    )
  }

  return (
    <header>
      <div className='wrapper'>
        {navBar()}
      </div>
    </header>
  )
}
export default Header
