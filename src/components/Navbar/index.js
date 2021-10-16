import React, { useState, useEffect } from 'react'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  FaBar,
} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'
import { IconContext } from 'react-icons/lib'

/*You can use activeClass="active" inside the NavLinks in case if you won't use styled components and if you r editing with css */
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
      <IconContext.Provider
        value={{
          color: '#fff',
        }} /*Incase if i want to put any icons inside of it and the colour of those will be color specified in value{{}} */
      >
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo
              style={{ textDecoration: 'none' }}
              to='/landing'
              onClick={toggleHome}
            >
              Abhishek Kumar
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBar />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-10}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='expert'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-680}
                >
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='projects'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-30}
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='feedback'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Feedback
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='findme'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
