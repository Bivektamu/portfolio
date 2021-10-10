import React, { useEffect, useState, useContext } from "react"
import PropTypes from "prop-types"

import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";

import { Container } from "../../styles/globalStyles"
import { HeaderWrapper, Logo, NavMenu } from "../../styles/headerStyles"

import { Link } from "gatsby"

import NavItem from './NavItem'

import GlobalContext from '../context'



const Header = () => {


  const [clsnme, setClsnme] = useState('');


  const [sections, setSections] = useState([])

  const { settings, setSettings } = useContext(GlobalContext)

  useEffect(() => {

    const secs = document.querySelectorAll('main > section')

    setSections(Array.prototype.slice.call(secs))


    document.addEventListener('scroll', scrolling)

    function scrolling() {
      if (window.scrollY > 0) {
        setClsnme('fixed')
      }
      else {
        setClsnme('')
      }

    }

    return () => {
      window.removeEventListener('scroll', scrolling)

    }
  }, [])



  let navItem;
  if (sections.length > 0) {
    navItem = sections.map((sec, index) => {
      const secId = (sec.getAttribute('id'))
      if (secId) {

        return <NavItem key={index} index={index} max={sections.length} anchorTo={secId} />
      }
      else {
        return ''
      }
    })
  }

  function changeTheme() {
    console.log('a')
    const { theme } = settings
    setSettings({ ...settings, theme: theme === 'light' ? 'dark' : 'light' })
  }

  return (
    <HeaderWrapper id="header" className={`${'header ' + clsnme}`} >

      <Container>
        <Logo>
          <Link to='/'>BIV</Link>

          <span onMouseEnter={() => { setSettings({ ...settings, cursor: 'hovered border__red' }) }}
            onMouseLeave={() => {
              setSettings({
                ...settings, cursor: ''
              })
            }}
            onClick={() => changeTheme()}
          >
          </span>

          < Link to='/' > EK</Link>
        </Logo>

        {/* <button classname="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span classname="navbar-toggler-icon"></span>
              </button> */}

        <NavMenu>
          <ul id="nav">
            {navItem && navItem}
            <li>
              <a className="nav-link hvr-buzz-out tel" id="mob-tel" href="tel:+61452424565">
                <FaMobileAlt />
              </a>
            </li>
          </ul>




        </NavMenu>

      </Container>




    </HeaderWrapper >
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
