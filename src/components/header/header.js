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
      <div className='nav-wrapper pinned' aria-label='Header'>
        <div className='page-header'>
          <div className='logo'>
            <a href={`${window.DISC_UI_URL}`}>
              <img
                src={`${window.LOGO_URL}`}
                alt={`${window.HEADER_TITLE} logo`}
                onError={handleImageLoadError}
              />
            </a>
          </div>
          <span className='title'>{`${window.HEADER_TITLE}`}</span>
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
