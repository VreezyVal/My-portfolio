import React, { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { Link, prefetchPathname, navigate } from "gatsby"

// Fonction pour mettre la première lettre en majuscule
const capitalizeFirstLetter = string => {
  if (!string) return "" // Vérification au cas où la chaîne serait vide
  const cleanString = string.replace("/", "")
  return (
    cleanString.charAt(0).toUpperCase() + cleanString.slice(1).toLowerCase()
  ) // Capitaliser
}

const PageTransition = ({ nextPageName, onComplete }) => {
  const loadingScreenRef = useRef(null)
  const loadingWordsRef = useRef(null)
  const topRoundedDivRef = useRef(null) // Ajout du roundedDivRef pour la transition arrondie
  const bottomRoundedDivRef = useRef(null) 
  const [isTransitioning, setIsTransitioning] = useState(false) // État pour bloquer les clics multiples

  useEffect(() => {
    if (isTransitioning) return // Ne rien faire si une transition est déjà en cours
    setIsTransitioning(true) // Marquer l'état de transition comme actif

    const tl = gsap.timeline({
      onComplete: () => {
        navigate(nextPageName);
        onComplete() // Remet la transition à l'état initial
      },
    });

    // Masquer l'ancienne page immédiatement
    // document.body.classList.add("hidden-page");

    // Initialisation de l'écran
    tl.set(loadingScreenRef.current, {
      top: "100%",
    })

    tl.set(loadingWordsRef.current, {
      opacity: 0,
      y: 0,
    })

    //Augmenter la hauteur du rounded div auu début
    tl.to(".rounded-div-wrap", {duration: 0.3, height: "100vh", // Animation de la hauteur
      ease: "Power4.easeIn", stagger: 0.1,
    })

    // Animer la hauteur de l'arrondi inférieur
    // tl.to(bottomRoundedDivRef.current, {duration: 0.3, height: '100vh', // Augmente la hauteur pour couvrir l'écran
    //   ease: 'Power4.easeIn',
    // }, "-=0.8");

    // Faire descendre le fond noir
    tl.to(loadingScreenRef.current, { duration: 0.4, top: "0%", ease: "Power4.easeIn" })

    // Animer l'apparition du texte
    tl.to(loadingWordsRef.current, { duration: 0.7, opacity: 1, y: -50, ease: "Power4.easeOut", delay: 0.05 })

    // Faire disparaître le texte
    tl.to(loadingWordsRef.current, { duration: 0.6, opacity: 0, ease: "linear"}, "-=0.8" )

      // Remettre les hauteurs des arrondis à 0 après l'animation
      tl.to("rounded-div-wrap", { duration: 0.3, height: '0vh', ease: 'Power4.easeOut' });
  
      tl.to("rounded-div-wrap", { duration: 0.3, height: '0vh', ease: 'Power4.easeOut'}, 
      "-=0.7" // Simultané avec la réduction de la div arrondie supérieure
    );

    // Faire remonter l'écran noir et reduire la hauteur du rounded div
    tl.to(
      loadingScreenRef.current,
      {
        duration: 0.7,
        top: "-100%",
        ease: "Power3.easeInOut",
        onComplete: () => {
          setIsTransitioning(false) // Marquer la transition comme terminée
        },
      },
      "-=0.3"
    )
  }, [nextPageName, onComplete])

  return (
    <div className="loading-screen" ref={loadingScreenRef}>
      {/* Arrondi supérieur */}
      <div className="page-transition-rounded-div top">
      <div className="rounded-div-wrap">
        <div className="rounded-div" ref={topRoundedDivRef}></div>
      </div>
      </div>
      

      {/* Texte central */}
      <div className="loading-words" ref={loadingWordsRef}>
        <p>{capitalizeFirstLetter(nextPageName.replace("/", ""))}</p>
      </div>

      {/* Arrondi inférieur */}
      <div className="page-transition-rounded-div bottom">
      <div className="rounded-div-wrap bottom" >
        <div className="rounded-div" ref={bottomRoundedDivRef}></div>
      </div>
      </div>
    </div>
  )
}
export default PageTransition
