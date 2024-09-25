import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import "../styles/index.css"
import Header from "../components/header"
import Footer from "../components/footer"

const HomePage = () => {
  const [showHome, setShowHome] = useState(false)

  // Fonction appelée à la fin de l'intro pour montrer la page d'accueil
  const handleIntroFinish = () => {
    setShowHome(true) //Change l'état pour afficher la page d'accueil après l'intro
  }
  return (
    <div>
      {showHome ? (
        <div>
          <Header />
          <p>Je suis Valmy DITULUAKIDI développeur web.</p>
          <Footer />
        </div>
      ) : (
        // Affiche l'intro si showHome est false
        <Intro onFinish={handleIntroFinish} />
      )}
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default HomePage
