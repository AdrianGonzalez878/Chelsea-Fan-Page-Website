// components/AnimatedSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1500 ease-in-out ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
