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
  const [activeNav, setActiveNav] = useState(false);


  const [sections, setSections] = useState([])

  const { settings, setSettings } = useContext(GlobalContext)

  useEffect(() => {

    const secs = document.querySelectorAll('main > section')

    setSections(Array.prototype.slice.call(secs))

    document.addEventListener('scroll', scrolling)

    return () => {
      window.removeEventListener('scroll', scrolling)
    }
  }, [])


  function scrolling() {
    if (window.scrollY > 0) {
      setClsnme('fixed')
    }

    else {
      setClsnme('')
    }
  }


  let navItem;
  if (sections.length > 0) {
    navItem = sections.map((sec, index) => {
      const secId = (sec.getAttribute('id'))
      if (secId) {

        return <NavItem key={index} index={index} max={sections.length} anchorTo={secId} setActiveNav={() => setActiveNav()} activeNav={activeNav} />
      }
      else {
        return ''
      }
    })
  }

  function changeTheme() {
    const { theme } = settings
    setSettings({ ...settings, theme: theme === 'light' ? 'dark' : 'light' })
  }

  let openCls = ''
  if (activeNav) {
    openCls = 'active__nav'
  }
  else {
    openCls = ''
  }

  console.log(openCls, clsnme)

  return (
    <HeaderWrapper id="header" className={`${'header ' + clsnme + ' ' + openCls}`} >

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

        <a className="nav-link hvr-buzz-out tel mob" id="mob-tel" href="tel:+61452424565">
          <FaMobileAlt />
        </a>

        <button id="nav__toggle" type="button" onClick={() => setActiveNav(!activeNav)}>
          <span></span>
        </button>

        <NavMenu>
          <ul id="nav">
            {navItem && navItem}
            <li className="desk">
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
