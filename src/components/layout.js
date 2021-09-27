/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import CustomCursor from '../components/customCursor'


const Layout = ({ children }) => {


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
      background: #fff;
      margin:0;
      font-weight: 400;
      font-size: 1.6rem;
      color:#777777;
      line-height: 1.4;
    }
    
    h1, h2, h3, h4, h5{
      font-weight: 500;
      margin: 0;
      margin-bottom: 10px;
      line-height:1.2;
      color:#212529;
    }

    .grid__4 {
      width: calc(33.33% - 20px);
    }

    main {
      overflow:hidden;
    }
    `


  return (
    <>
      <GlobalStyles />
      <Header />
      <CustomCursor />


      <main>{children}</main>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
