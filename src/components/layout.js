import React, { createContext, useState, useMemo, useEffect } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

import CustomCursor from '../components/customCursor'

import GlobalContext from "../context"

const Layout = ({ children }) => {

  const [settings, setSettings] = useState({
    cursor: '',
    loading: true,
    theme: localStorage.getItem('theme'),
  })

  const { theme } = settings


  useEffect(() => {



    if (!(theme)) {
      localStorage.setItem('theme', 'light')
      setSettings({ ...settings, theme: localStorage.getItem('theme') })
    }
    else {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const darkTheme = {
    color: '#fff',
    background: '#24292F',
    boxShadow: '0px 10px 30px rgb(0 0 0 / 50%)'

  }


  const lightTheme = {
    background: '#fff',
    color: '#24292F',
    boxShadow: '0px 10px 30px rgb(57 56 61 / 21%)'

  }

  const value = useMemo(
    () => ({ settings, setSettings }),
    [settings]
  )
  const GlobalStyles = createGlobalStyle`

  ${normalize}  
  * {
      text-decoration: none;
      /* cursor: none; */
    }

    html {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      font-size: 10px;
    }

    body {
      font-family:'Poppins';
      /* background: #fff; */
      background: ${props => props.theme.background};
      margin:0;
      font-weight: 400;
      font-size: 1.6rem;
      /* color:#777777; */
      color: ${props => props.theme.color};
      line-height: 1.4;
    }
    
    h1, h2, h3, h4, h5{
      font-weight: 500;
      margin: 0;
      margin-bottom: 10px;
      line-height:1.2;
      color:${props => props.theme.color};
    }

    .grid__4 {
      width: calc(33.33% - 20px);
    }

    main {
      overflow:hidden;
    }
    `

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalContext.Provider value={value}>

        <GlobalStyles />
        <Header />
        <CustomCursor />

        <main>{children}</main>
      </GlobalContext.Provider>
    </ThemeProvider>

  )

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
