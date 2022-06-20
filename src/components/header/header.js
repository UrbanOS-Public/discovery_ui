import './header.scss'
import { Component } from 'react'
import NavDropdown from '../nav-dropdown'
import urbanosLogo from '../../assets/urbanos-logo.png';
import { HamburgerButton } from 'react-hamburger-button';

export default class Header extends Component {
  static defaultProps = {
    scrollThreshold: 60
  }

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // this.setState({
    //   collapsed: window.scrollY > this.props.scrollThreshold
    // });
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  navBar() {
    return (
      <div
        className={`nav-wrapper ${this.state.collapsed ? "pinned" : ""} ${
          this.state.open ? "open" : ""
        }`}
      >
        <div className={"logo"}>
          <a href={`//${window.BASE_URL}`}>
            <img src={urbanosLogo}></img>
          </a>
        </div>
        <div className="nav-element-container">
          <a
            className="nav-element blue"
            href={"/"}
          >
            EXPLORE DATA
          </a>
          <a className="nav-element" href="/">
            ABOUT URBAN OS
          </a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <header>
        <div className="wrapper">
          {this.navBar()}
        </div>
      </header>
    )
  }
}

