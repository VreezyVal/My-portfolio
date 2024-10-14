
import { useEffect } from "react";
import gsap from "gsap";
const MagnetEffect = ({ showHome}) => {

      // Déclaration de la fonction initMagneticButtons
  function initMagneticButtons() {
    const magnets = document.querySelectorAll('.magnetic');
    const strength = 100; // Force d'attraction magnétique

    if (window.innerWidth > 540) {  // Applique l'effet pour les écrans de grande taille
      magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet);

        magnet.addEventListener('mouseleave', (event) => {
          // Rebond dynamique avec GSAP à la sortie de l'élément
          gsap.to(event.currentTarget, 1.5, {
            x: 0,
            y: 0,
            ease: "elastic.out(1.2, 0.4)" // Effet de rebond naturel
          });
        });
      });

      function moveMagnet(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();
        var magnetsStrength = 100; // Exemple de valeur pour la force d'attraction

        // Ajustement de la position avec GSAP
        gsap.to(magnetButton, 0.5, {
          x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrength,
          y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrength,
          rotate: "0.001deg",
          ease: "power3.out"
        });
      }
    }
  }
    useEffect(()=>{
        console.log("current showHome state: ", showHome);
        if(showHome) {
            console.log("Magnet effect applied")

            // Appelle de la fonction initMagnetButtons une fois le composant chargé
            initMagneticButtons();
        }
        
    },[showHome]); // Ajoute showHome comme dépendance pour re-checker

    return null; /* Ce composant ne rend rien de visible dans le DOM */
}

export default MagnetEffect;