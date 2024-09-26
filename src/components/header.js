import * as React from "react"
import { Link } from "gatsby"
import { useState, useEffect } from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(()=> {
    const handleScroll = ()=>{
      if (window.scrollY > 50){
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return(
  <header className={`header ${isScrolled ? 'scrolled':''}`}>
    <Link to="/" className="logo">
    Valmy Dituluakidi
    <img  alt="My Bitmoji" src=""/>
    </Link>
    <nav className="nav">
      <ul className={`nav-links ${isScrolled ? 'hidden': ''}`}>
        <li><Link to="Work" className="header-link">Work</Link></li>
        <li><Link to="About" className="header-link">About</Link></li>
        <li><Link to="Contact" className="header-link">Contact</Link></li>
      </ul>
      <div className={`hamburger ${isScrolled ? 'visible': ''}`}>
        <span></span>
        <span></span>
      </div>
    </nav>
  </header>
  )
}
export default Header
