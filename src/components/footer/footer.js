import './footer.scss'

const Footer = () => {

  const rightLinks = JSON.parse(window.FOOTER_RIGHT_LINKS),
    renderLink = ({ url, linkText }) => <a key={linkText} className="link" href={url}> {linkText}</a>;

  return (
    <footer aria-label="Footer">
      <div className='footer-wrapper'>
        <ul>
          {window.FOOTER_LEFT_SIDE_TEXT && <li key='left' className='left-side-text'>
            {renderLink({ url: window.FOOTER_LEFT_SIDE_LINK, linkText: window.FOOTER_LEFT_SIDE_TEXT })}
          </li>}
        </ul>
        <ul key='right' className='links'>
          {rightLinks.map(renderLink)}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
