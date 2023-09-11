

import { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState('¡');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100); // Ajusta la velocidad de escritura aquí
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

 

  return (
    <>
    <p className="text-5xl font-extrabold text-gray-800 mb-4 text-center">{displayText}</p>
    </>
  );
};

export default TypingAnimation;


