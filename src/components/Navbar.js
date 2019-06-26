import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/">
              <span class="brand"><svg><path d="M47.34,12.14c4.44-2.71,9.52-4,14.6-5.17.83-.18,1.61-.56,2.43-.75,1-.23,1.67.12,1.75,1.28s.25,2.27-.62,3.37a6.36,6.36,0,0,0-.73,2.69c-.25,1.33-.37,2.69-.66,4-1.22,5.75-5.16,7.84-10.9,9.07a4.82,4.82,0,0,1-4.64-1.86,41.77,41.77,0,0,1-3.3-5c-.42-.68-.46-1.72-1.55-1.67A2.78,2.78,0,0,0,41,19.81,25.6,25.6,0,0,0,40,22.74C37.86,31.68,29.91,33.8,22.95,32.8a4.25,4.25,0,0,1-3.51-3c-.72-2-1.37-4-2-6a2.46,2.46,0,0,0-2.26-2.09c-1-.09-1.28-.79-1.37-1.73-.25-2.66-.06-2.76,2.61-3,2.11-.18,4.19-.78,6.29-1.14a64.21,64.21,0,0,1,6.6-1c2.63-.17,5.27,0,7.91,0C37.22,14.75,44.12,14.11,47.34,12.14ZM32.95,16.23c-1.56.12-3,.18-4.34.36A21.29,21.29,0,0,0,21,18.71a3.7,3.7,0,0,0-2.26,3.91,25.73,25.73,0,0,0,1.63,6.16,5.25,5.25,0,0,0,2.75,2.44C27.8,33,34,30.81,36.5,26.59a14.42,14.42,0,0,0,2.06-7.41,2.18,2.18,0,0,0-2-2.55C35.35,16.38,34.07,16.34,32.95,16.23Zm30.21-2c-.09-1.26-.09-2.21-.24-3.14-.23-1.47-.81-1.9-2.29-1.76-4.54.45-8.53,2.39-12.36,4.69a3.78,3.78,0,0,0-1.84,4.13,10,10,0,0,0,3.77,6.31,3.67,3.67,0,0,0,1.59.61c4.62.85,10.06-2.84,11-7.47C63,16.37,63.05,15.12,63.16,14.2Z"></path><path d="M63.41,5.59a17.83,17.83,0,0,1-2.09,1c-4.65,1.52-8.62.1-12.18-2.91-2.32-2-4.27-2.25-6.9-.73-1.78,1-3.44,2.25-5.15,3.39a2.19,2.19,0,0,1-2.74,0c-1.55-1.1-1.53-2.5.22-3.17C37.4,2.17,40.28,1.18,43.19.32c2.32-.69,4.64-.12,6.95.42C54.64,1.78,58.82,3.72,63.41,5.59Z"></path><path d="M13.75,16.92c-1.57,1-.27,2.39-.8,3.51,0,0-.15.09-.19.06C9.84,19,6.93,17.42,4,15.85a2.57,2.57,0,0,1-1.09-1C1.94,12.81,1,10.71.1,8.61A.83.83,0,0,1,.82,7.35c.32,0,1,.59,1,.89-.09,1.51.94,2.25,2,2.88,2.88,1.76,5.82,3.42,8.73,5.12C12.84,16.46,13.24,16.65,13.75,16.92Z"></path></svg></span>
            </Link>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/blog" style={{
            padding: '30px',
            background: 'yellow',
          }}>
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
