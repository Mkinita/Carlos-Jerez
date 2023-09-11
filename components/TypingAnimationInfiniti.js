import { useState, useEffect } from 'react';

const TypingAnimation = ({ text, intervalDuration = 100, repeatDelay = 5000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (currentIndex < text.length) {
      timer = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, intervalDuration);
    } else {
      timer = setTimeout(() => {
        setDisplayText('✌️');
        setCurrentIndex(0);
      }, repeatDelay);
    }

    return () => clearTimeout(timer);
  }, [currentIndex, text, intervalDuration, repeatDelay]);

  return (
    <span className=" text-2xl text-white">{displayText}</span>
  );
};

export default TypingAnimation;


