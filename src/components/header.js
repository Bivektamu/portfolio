import * as React from "react"
import PropTypes from "prop-types"

import { FaMobileAlt } from 'react-icons/fa';

import { Container } from "../../styles/globalStyles"
import { Logo, NavMenu } from "../../styles/headerStyles"

import { Link } from "gatsby"

const Header = () => (

  <header id="header" className="header_area">

    <Container>
      <Logo>
            <Link to='/'>BIV</Link>
             
            <span></span>

            <Link to='/'>EK</Link>
        </Logo>

      {/* <button classname="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span classname="navbar-toggler-icon"></span>
            </button> */}

      <NavMenu>
        <ul>
          <li className="active">
            <a className="nav-link" href="#home">home</a>
          </li>

          <li>
            <a className="nav-link" href="#about">about</a>
          </li>

          <li>
            <a className="nav-link" href="#skills">skills</a>
          </li>

          <li>
            <a className="nav-link" href="#projects">projects</a>
          </li>

          <li>
            <a className="nav-link" href="#contact">contact</a>
          </li>

          <li>
            <a className="nav-link hvr-buzz-out tel" id="mob-tel" href="tel:+61452424565">
                <FaMobileAlt />
            </a>
          </li>
        </ul>
            
            

            
        </NavMenu>
    
        </Container>




  </header>


  
  )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
