'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  yOffset = 40,
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
