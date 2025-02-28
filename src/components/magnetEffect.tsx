
import React, { useEffect } from "react";
import gsap from "gsap";    // Bibliothèque d'animation


const MagnetEffect = ({ }) => {
  // useEffect s'exécute après le rendu du composant
  useEffect(() => {
    const initMagneticButtons = () => {
      // Sélectionne tous les éléments avec la classe 'magnetic'
      const magnets = document.querySelectorAll('.magnetic');

      // Ne s'applique que sur les écrans > 540px
      if(window.innerWidth > 540) {
        magnets.forEach((magnet) => {
          // Effet de survol sur la souris
          magnet.addEventListener('mousemove', (event: Event) => {
            const mouseEvent = event as MouseEvent;
            const magnetButton = event.currentTarget as HTMLElement
            //Obtient les dimensions et la position de l'élément
            const bounding = magnetButton.getBoundingClientRect();
            // Récupère la force de l'effet depuis les attributs data-*
            const magnetsStrength = magnetButton.getAttribute('data-strength') || '150';
            const magnetsStrengthText = magnetButton.getAttribute('data-strength-text') || '75';

            //Animation de l'élément principal
            gsap.to(magnetButton, {
              duration: 0.1, // Durée de l'animation
              // Calcule le déplacement en fonction de la position de la souris
              x: ((mouseEvent.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * parseInt(magnetsStrength),
              y: ((mouseEvent.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * parseInt(magnetsStrength),
              rotate: '0.001deg',
              ease: 'power4.easeOut' //Type d'easing pour une animation fluide
            });

            // Animation du texte à l'intérieur (si présent)
            const btnText = magnetButton.querySelector('btn-text');
            if(btnText) {
              //Animation similaire pour le texte
              gsap.to(btnText, {
                duration: 0.1,
                x: ((mouseEvent.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * parseInt(magnetsStrengthText),
                y: ((mouseEvent.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * parseInt(magnetsStrengthText),
                rotate: '0.001deg',
                ease: 'power4.easeOut'
              });
            }
          });

          // Retour à la position initiale quand le souris quitte l'élément
          magnet.addEventListener('mouseleave', (event) => {
            const magnetButton = event.currentTarget as HTMLElement;
            gsap.to(magnetButton, {
              duration: 1,
              x: 0,
              y: 0,
              ease: 'elastic.out(7, 0.8)'  // Effet de rebond élastique
            });

            //Animation similaire pour le texte
            const btnText = magnetButton.querySelector('.btn-text');
            if (btnText) {
              gsap.to(btnText, {
                duration: 1.5,
                x: 0,
                y: 0,
                ease: 'elastic.out(1.2, 0.4)'
              });
            }
          });

        // Effets fill pour les boutons
        if(magnet.classList.contains('btn')) {
          //Animation au survol
          magnet.addEventListener('mouseenter', () => {
            const btnFill = magnet.querySelector('.btn-fill');
            const btnTextInner = magnet.querySelector('.btn-text-inner.change');

            if (btnFill) {
              gsap.fromTo(btnFill, 
                { y: '76%' },
                { duration: 0.6, y: '0%', ease: 'power2.easeInOut' }
              );
            }

            if (btnTextInner) {
              gsap.to(btnTextInner, {
                duration: 0.3,
                color: '#FFFFFF',
                ease: 'power3.in'
              });
            }
          });

          // Animation à la sortie
          magnet.addEventListener('mouseleave', () => {
            const btnFill = magnet.querySelector('.btn-fill');
            const btnTextInner = magnet.querySelector('.btn-text-inner.change');

            if (btnFill) {
              gsap.to(btnFill, {
                duration: 0.6,
                y: '-76%',
                ease: 'power2.inOut'
              });
            }

            if (btnTextInner) {
              gsap.to(btnTextInner, {
                duration: 0.3,
                color: '#1C1D20',
                ease: 'power3.out',
                delay: 0.3
              });
            }
          });
        }
        });
      }
    };
    // Initialise l'effet
    initMagneticButtons();

    //Cleanup
    return () => {
      const magnets = document.querySelectorAll('.magnetic');
      magnets.forEach((magnet) => {
        // Remplace les éléments pour supprimer les event listeners
        magnet.replaceWith(magnet.cloneNode(true));
      });
    };
  }, []); // [] signifie que useEffect ne s'exécute qu'une fois au montage

    return null; /* Ce composant ne rend rien de visible dans le DOM */
};

export default MagnetEffect;