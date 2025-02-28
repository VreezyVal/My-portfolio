import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Link } from "gatsby"
import ProfilePicture from "../images/IMG_8545.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  const footerRef = useRef(null)
  const [localTime, setLocalTime] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Ajuste la hauteur en fonction du scroll
      gsap.to(footerRef.current, {
        height: `${Math.min(20 + scrollPosition * 0.1, 100)}vh`, // Limite la hauteur max à 100vh
        ease: "Power4.easeOut",
      })
    }

    // Fonction pour mettre à jour l'heure locale
    const updateTime = () => {
      const now = new Date()
      const options = { hour: "2-digit", minute: "2-digit" }
      setLocalTime(now.toLocaleTimeString("FR-FR", options))
    }

    window.addEventListener("scroll", handleScroll)
    updateTime() // Appel immédiat pour l'heure
    const timeInterval = setInterval(updateTime, 1000) //Met à jour chaque seconde

    //cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(timeInterval) // Supprime l'interval pour éviter les fuites de mémoire
    }
  }, [])

  return (
    <div className="" ref={footerRef}>
      <footer className="section footer">
        {/* Première partie du footer */}
        <div className="footer-top medium">
          <div className="row">
            <div className="flex-col">
              <h2>
                <span className="image-and-text">
                  <img
                    src={ProfilePicture}
                    alt="Profil Picture"
                    className="profile-picture"
                  />
                  Let's work
                </span>
                <span>together</span>
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="flex-col">
              <div className="stripe"></div>
              <div className="get-in-touch-container">
                <Link to="/contact" className="footer-circle-button magnetic">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="flex-col">
              <div className="btn">
                <a
                  href="mailto:ceo@ditucorp.fr"
                  className="btn-contact magnetic"
                  data-strength="35"
                >
                  <div className="btn-fill"></div>
                  <span className="btn-text">
                    <span className="btn-text-inner change">
                      ceo@ditucorp.fr
                    </span>
                  </span>
                </a>
              </div>
              <div className="btn">
                <a
                  href="tel:+33752896172"
                  className="btn-contact magnetic"
                  data-strength="35"
                >
                  <div className="btn-fill"></div>
                  <span className="btn-text">
                    <span className="btn-text-inner change">
                      +33 7 52 89 61 72
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Deuxième partie du footer  */}
        <div className="footer-bottom">
          <div className="row">
            <div className="flex-col">
              {/* < Mentions légales et signature  */}
              <div className="footer-bottom-left">
                <div>
                  <p className="footer-title">coded by</p>
                  <p>Valmy Dituluakidi</p>
                </div>
                <div>
                  <p className="footer-title">version</p>
                  <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
                </div>
              </div>
            </div>
            <div className="flex-col">
              {/* Local Time et icône tournante  */}
              <div className="footer-bottom-right">
                <div className="socials">
                  <p className="footer-title">socials</p>
                  <div className="footer-social-icons">
                    <ul>
                      <li>
                      <a
                      href="https://www.linkedin.com/in/valmy-dituluakidi"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-strength="25"
                      className="icon-link magnetic"
                    >
                      <div className="btn-fill"></div>
                      <FontAwesomeIcon icon={faLinkedin} className="icon" />
                    </a>
                    </li>

                    <li>
                    <a
                      href="https://github.com/VreezyVal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-strength="25"
                      className="icon-link magnetic"
                    >
                      <div className="btn-fill"></div>
                      <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                    </li>

                    <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-strength="25"
                      className="icon-link magnetic"
                    >
                      <div className="btn-fill"></div>
                      <FontAwesomeIcon icon={faTwitter} className="icon" />
                    </a>
                    </li>
                    </ul>
                    
                  </div>
                </div>
                <div className="local-time">
                  <p className="footer-title">local time</p>
                  <div className="localTime-icons">
                    <FontAwesomeIcon icon={faGlobe} className="icon-globe" />
                    <span id="local-time">{localTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
