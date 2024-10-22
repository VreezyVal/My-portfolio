/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useState, useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import MagnetEffect from "./magnetEffect"
import PageTransition from "./transition"
import { navigate } from "gatsby"
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

   // Etat pour la transition
   const [transitioning, setTransitioning] = useState(false);
   const [nextPage, setNextPage] = React.useState('');
 
   // Fonction pour gérer le changement de page avec la transition
   const handlePageTransition = (pageName) => {
     setNextPage(pageName);
     setTransitioning(true);
   };

  return (
    <>
    {/* Si en train de faire une transition, affiche l'animation */}
    {transitioning && <PageTransition nextPageName={nextPage} onComplete={()=> setTransitioning(false)} />}
    
    {/* Si en train de faire une transition, affiche l'animation */}
    {! transitioning && (
      <div>
        <Header isScrolled={isScrolled} handlePageTransition={handlePageTransition}/> {/* Utilise ton propre header */}
        <div className="content-wrapper">
          <main>{children}</main>
        </div>
        <Footer />  {/* Utilise ton propre footer */}
      </div>
    )}
    </>
  )
}

export default Layout
