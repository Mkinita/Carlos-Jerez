

import { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState('✌');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 80); // Ajusta la velocidad de escritura aquí
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

 

  return (
    <>
    <span className="text-2xl text-white">{displayText}</span>
    </>
  );
};

export default TypingAnimation;


