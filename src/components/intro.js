import React, {useState, useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/index.css"

gsap.registerPlugin(ScrollTrigger);




const words = [
    'Bonjour' , // Français
    'Hello' , // Anglais
    'Hola' , // Espagnol
    'こんにちは' , // Japonais
    '你好' , // Mandarin
    'مرحبا' , // Arabe
    'Mbote' // Lingala
  ];

  const specialDurations = { 'Bonjour': 600, 'Mbote': 600 }; // Durées spécifiques en millisecondes
  const defaultDuration = 150; // Durée par défaut en millisecondes
  
  const Intro = ({onFinish}) => {
    const [currentWord, setCurrentWord] = useState(0);
  
    useEffect(() => {
      // Calcule la durée pour chaque mot, en fonction des exceptions
      const duration = specialDurations[words[currentWord]] || defaultDuration;
  
      const interval = setTimeout(() => {
        if (currentWord === words.length - 1) {
          onFinish(); // Si on est au dernier mot, on termine l'intro
        } else {
          setCurrentWord((prev) => prev + 1); // Passe au mot suivant
        }
      }, duration);
  
      return () => clearTimeout(interval); // Nettoyage du timer
    }, [currentWord, onFinish]);
  
    return (
      <div className="intro">
        <p>{words[currentWord]}</p>
      </div>
    );
  };

  export default Intro;