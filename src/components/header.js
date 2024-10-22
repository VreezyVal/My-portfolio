import * as React from "react"
import { Link, navigate } from "gatsby"
import { useState, useEffect } from "react"
import Layout from "./layout"
import PageTransition from "./transition"


const Header = ({handlePageTransition}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideHamburger, setHideHamburger] = useState(false);

  useEffect(()=> {
    const handleScroll = ()=>{
      if (window.scrollY > 50){
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setHideHamburger(false); // Réinitialise la classe 'done' quand on remonte en haut
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  // Détecte la fin de l'animation pour ajouter la classe "done"
  useEffect(() => {
    if (!isScrolled) {
      const timeout = setTimeout(() => {
        setHideHamburger(true); // Ajoute la classe "done" après l'animation
      }, 2000); // Délai équivalent au temps d'animation
      return () => clearTimeout(timeout);
    }
  }, [isScrolled]);

  

  return(
  <header className={`header ${isScrolled ? 'scrolled':''}`}>
    <Link to="/" onClick={(e) => {e.preventDefault(); // Empêche la navigation immédiate
    handlePageTransition("/")}} className="logo">
    Valmy Dituluakidi
    <img  alt="My Bitmoji" src=""/>
    </Link>
    <nav className="nav">
      <ul className={`nav-links ${isScrolled ? 'hidden': ''}`}>
        <li className="magnetic" ><Link to="/work" onClick={(e) => {
          e.preventDefault(); // Empêche la navigation immédiate
          handlePageTransition("/work")}} className="header-link">Work</Link></li>
        <li ><Link to="/about" onClick={(e) => { 
          e.preventDefault(); // Empêche la navigation immédiate
          handlePageTransition("/about")}} className="header-link ">About</Link></li>
        <li ><Link to="/contact" onClick={(e) =>{ 
          e.preventDefault(); // Empêche la navigation immédiate
          handlePageTransition("/contact")}} className="header-link ">Contact</Link></li>
      </ul>
      <div className={`hamburger magnetic ${isScrolled ? 'visible': 'hidden'}`}>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
  )
}
export default Header
