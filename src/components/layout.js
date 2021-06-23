/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'


const Layout = ({ children }) => {


  const GlobalStyles = createGlobalStyle`
/* @import url("https://fonts.googleapis.com/css?family=Poppins:200,200i,300,300i,400,400i,500,500i,600,600i,700&display=swap"); */

  ${normalize}  
  * {
      text-decoration: none;
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
    
    h1, h2, h3, h4{
      font-weight: 500;
      margin: 0;
      margin-bottom: 10px;
      line-height:1.2;
      color:#212529;
    }

    `


  return (
    <>
    <GlobalStyles />
      <Header />
     
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
