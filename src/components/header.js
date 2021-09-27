import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";

import { Container } from "../../styles/globalStyles"
import { HeaderWrapper, Logo, NavMenu } from "../../styles/headerStyles"

import { Link } from "gatsby"



const Header = () => {

  const headerRef = useRef(null);

  const [clsnme, setClsnme] = useState('');



  useEffect(() => {

    document.addEventListener('scroll', scrolling)


    function scrolling() {
      if (window.scrollY > 0) {
        setClsnme('fixed')
      }
      else {
        setClsnme('')
      }
    }

    return () => { window.removeEventListener('scroll', scrolling) }
  }, [])

  const onClick = (e) => {
    e.preventDefault()

    const item = (e.target)

    const anchor = (item.getAttribute('data-anchor'))

    const sec = document.getElementById(anchor)


    window.scrollTo({
      top: sec.offsetTop - document.getElementById('header').getBoundingClientRect().height,
      // left: 100,
      behavior: 'smooth'
    });
  }

  return (
    <HeaderWrapper id="header" className={`${'header ' + clsnme}`}>

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
          <ul id="nav">
            <li className="active">
              <Link to="#home" className="nav-link" data-anchor="home" onClick={(e) => onClick(e)}>home</Link>
            </li>

            <li>
              <Link to="#about" className="nav-link" data-anchor="about" onClick={(e) => onClick(e)}>about</Link>
            </li>

            <li>
              <Link to="#project" className="nav-link" data-anchor="project" onClick={(e) => onClick(e)}>projects</Link>
            </li>

            <li>
              <Link to="#skill" className="nav-link" data-anchor="skill" onClick={(e) => onClick(e)}>skills</Link>
            </li>

            <li>
              <Link to="#contact" className="nav-link" data-anchor="contact" onClick={(e) => onClick(e)}>contact</Link>
            </li>

            <li>
              <a className="nav-link hvr-buzz-out tel" id="mob-tel" href="tel:+61452424565">
                <FaMobileAlt />
              </a>
            </li>
          </ul>




        </NavMenu>

      </Container>




    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
