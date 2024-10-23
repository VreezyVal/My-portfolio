import React, {useEffect, useState, useRef} from 'react';
import {gsap} from 'gsap';
import { Link, navigate } from 'gatsby';

// Fonction pour mettre la première lettre en majuscule
const capitalizeFirstLetter = (string) => {
  if (!string) return ''; // Vérification au cas où la chaîne serait vide
  const cleanString = string.replace("/", "");
  return cleanString.charAt(0).toUpperCase() + cleanString.slice(1).toLowerCase(); // Capitaliser
};

const PageTransition = ({ nextPageName, onComplete }) => {
    const loadingScreenRef = useRef(null);
    const loadingWordsRef = useRef(null);
    const [isTransitioning, setIsTransitioning] = useState(false); // État pour bloquer les clics multiples

    useEffect(() => {

      if (isTransitioning) return; // Ne rien faire si une transition est déjà en cours
    setIsTransitioning(true); // Marquer l'état de transition comme actif

      const tl = gsap.timeline({
        onComplete: () => {       
          onComplete(); // Remet la transition à l'état initial
          
        },
      });

      // Initialisation de l'écran
      tl.set(loadingScreenRef.current, {
        top: "100%",
      });

      tl.set(loadingWordsRef.current, {
        opacity: 0,
        y: 0,
      });

      // Faire descendre le fond noir
      tl.to(loadingScreenRef.current, {
        duration: 0.4,
        top: "0%",
        ease: "Power4.easeIn",
      });

      // Animer l'apparition du texte
      tl.to(loadingWordsRef.current, {
        duration: 0.7,
        opacity: 1,
        y: -50,
        ease: "Power4.easeOut",
        delay: 0.05,
        
      });

      // Faire disparaître le texte
      tl.to(loadingWordsRef.current, {
        duration: 0.6,
        opacity: 0,
        ease: "linear",
        
      }, "-=0.8");

      // Ajouter un délai manuel avant la navigation
    setTimeout(() => {
      navigate(nextPageName); // Naviguer vers la nouvelle page après un court délai
    }, 1500); // Délai ajustable en millisecondes pour attendre la fin de l'animation

      // Faire remonter l'écran noir
      tl.to(loadingScreenRef.current, {
        duration: 0.7,
        top: "-100%",
        ease: "Power3.easeInOut",
        onComplete: () => {
          setIsTransitioning(false); // Marquer la transition comme terminée
        },
      }, "-=0.2");

    }, [nextPageName, onComplete]);

    return (
      <div className="loading-screen" ref={loadingScreenRef} >       
      {/* Texte central */}
      <div className="loading-words" ref={loadingWordsRef}>
        <p>{capitalizeFirstLetter(nextPageName.replace("/", ""))}</p>
      </div>
    </div>
  );

  };
export default PageTransition