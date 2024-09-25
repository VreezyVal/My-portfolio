import React, { useState} from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo";
import Intro from "../components/intro";
import "../styles/index.css";

const HomePage = () => {

  const [showHome, setShowHome] = useState(false);

  const handleIntroFinish = () => {
    setShowHome(true); //Montre la page d'accueil après l'intro
  };
  return (
    <div>
      {showHome? (
        <div>
      <p>Je suis Valmy DITULUAKIDI développeur web.</p>
    </div>
      ) : (
        <Intro onFinish={handleIntroFinish} />
      )}
      </div>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default HomePage
