/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import MagnetEffect from "./magnetEffect"
import "./layout.css"
import "../styles/index.css"

const Layout = ({ children, showHome, isScrolled }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header isScrolled={isScrolled}/> {/* Utilise ton propre header */}
      <div className="content-wrapper">
        <main>{children}</main>
      </div>
      <Footer />  {/* Utilise ton propre footer */}
    </>
  )
}

export default Layout
