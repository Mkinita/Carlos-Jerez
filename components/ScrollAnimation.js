import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

const ScrollAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // No marcar como visto solo una vez
    threshold: 0.5, // Cambia este valor según tus necesidades
  });

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  const animationClasses = classNames({
    'opacity-0 translate-y-10': !isInView,
    'opacity-100 translate-y-0 transition-opacity duration-1000': isInView,
  });

  return (
    <div ref={ref} className={`transform ${animationClasses}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;

