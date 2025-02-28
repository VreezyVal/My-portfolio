import React, { useState, useEffect, useRef } from "react"
import { Link, navigate } from "gatsby"
import type { MouseEvent } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"


interface HeaderProps {
  handlePageTransition: (path: string) => void;    // Prop optionnelle pour personnaliser les transitions
}

const Header: React.FC<HeaderProps> = ({ handlePageTransition }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideHamburger, setHideHamburger] = useState(false);
  const [isOffscreenOpen, setIsOffscreenOpen] = useState(false);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setHideHamburger(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (!isScrolled && !isOffscreenOpen) {
      const timeout = setTimeout(() => {
        setHideHamburger(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isScrolled, isOffscreenOpen]);

  // Fonction pour ouvrir/fermer le menu offscreen
  const toggleOffScreenMenu = () => {
    setIsOffscreenOpen((prev) => {
      if (!prev) {
        // Sauvegarde la position actuelle du scroll
        scrollPosition.current = window.scrollY;
        document.documentElement.style.overflow = 'hidden';
      } else {
        // Réactive le scroll et restaure la position
        document.documentElement.style.overflow = '';
        window.scrollTo(0, scrollPosition.current);
      }
      console.log("toggling offscreen menu. New state:", !prev); // Affiche le nouvel état
      return !prev;
    });
  };


  const onLinkClick = (e: MouseEvent, path: string) => {
    e.preventDefault();
    console.log(`Navigation to ${path}`); //Vérifiez la
    if (handlePageTransition) {
      handlePageTransition(path);
    } else {
      navigate(path); // Redirection effective
    }
  }
  
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/*   Bitmoji   */}
      <Link 
        to="/" 
        onClick={(e: MouseEvent) => {
          e.preventDefault();
          handlePageTransition("/")
        }} 
        className="logo magnetic"
        data-strength="50"
      >
        Valmy Dituluakidi
        <img alt="My Bitmoji" src="" />
      </Link>
      <nav className="nav">
        <ul className={`nav-links ${isScrolled ? 'hidden' : ''}`}>
          <li>
            <Link 
              to="/work" 
              onClick={(e: MouseEvent) => onLinkClick(e, "/work")}
              className="header-link magnetic"
              data-strength="30"
              activeClassName="active-link"
            >
              Work
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              onClick={(e: MouseEvent) => onLinkClick(e, "/about")}
              className="header-link magnetic"
              data-strength="30"
              activeClassName="active-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              onClick={(e: MouseEvent) => onLinkClick(e, "/contact")}
              className="header-link magnetic"
              data-strength="30"
              activeClassName="active-link"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div 
          className={`hamburger magnetic ${isScrolled ? 'visible' : 'hidden'} ${hideHamburger && !isOffscreenOpen ? 'done' : ''} ${isOffscreenOpen? 'open' : ''}`}
          data-strength="50" onClick={() => {
            console.log('Clic sur le hamburger');
            toggleOffScreenMenu()}}
          >
          <div className="btn-fill"></div>
          <span></span>
          <span></span>
        </div>
      </nav>
       {/* Menu Offscreen */}
      <div className={`offscreen-overlay ${isOffscreenOpen ? 'active': ''}`}
      onClick={toggleOffScreenMenu}></div>
  <div className={`offscreen-menu ${isOffscreenOpen ? 'active' : ''}`}>
    <div className="fixed-nav-rounded-div">
      <div className="rounded-div-wrap">
        <div className="rounded-div"></div>
      </div>
    </div>
    <div className="fixed-nav-inner">
      <div className="row nav-row">
      <div className="stripe"></div>
    <ul className="fixed-nav-links">
      <li>
        <Link 
          to="/" 
          onClick={(e: MouseEvent) => {
            e.preventDefault();
            handlePageTransition("/");
            toggleOffScreenMenu();
          }}
          className="offscreen-link magnetic"
          data-strength="30"
          activeClassName="active-link"
          >
          Home
        </Link>
      </li>
      <li>
        <Link 
          to="/work" 
          onClick={(e: MouseEvent) => {
            e.preventDefault();
            handlePageTransition("/work");
          }}
          className="offscreen-link magnetic"
          data-strength="30"
          activeClassName="active-link"
          >
          Work
        </Link>
      </li>
      <li>
        <Link 
          to="/about" 
          onClick={(e: MouseEvent) => {
            e.preventDefault();
            handlePageTransition("/about");
          }}
          className="offscreen-link magnetic"
          data-strength="30"
          activeClassName="active-link"
          >
          About
        </Link>
      </li>
      <li>
        <Link 
          to="/contact" 
          onClick={(e: MouseEvent) => {
            e.preventDefault();
            handlePageTransition("/contact");
          }}
          className="offscreen-link magnetic"
          data-strength="30"
          activeClassName="active-link"
        >
          Contact
        </Link>
        </li>
      </ul>
    </div>
        <div className="row social-row">

          <div className="socials">
          <p className="footer-title">socials</p>
                  <div className="social-row-icons">                   
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
        </div>
      </div>
    </div>
    </header>
  )
}

export default Header