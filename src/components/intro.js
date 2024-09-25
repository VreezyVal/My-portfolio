import React, {useState, useEffect} from "react";
import "../styles/index.css"
const words = [
    'Bonjour', // Français
    'Hello', // Anglais
    'Hola', // Espagnol
    'こんにちは', // Japonais
    '你好', // Mandarin
    'مرحبا', // Arabe
    'Mbote' // Lingala
  ];

  const Intro = ({onFinish}) => {
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 200); //Change de mot toutes les 0.2s

        const timer = setTimeout(() =>{
            onFinish(); // Appelle la fonction pour terminer l'intro après l'affichage de tous les mots
        }, words.length * 200); //Dure 7 secondes (0.2 seconde  par mot)

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="intro">
            <p>{words[currentWord]}</p>
        </div>
    );
  };

  export default Intro;