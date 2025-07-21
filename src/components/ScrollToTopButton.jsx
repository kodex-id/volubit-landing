import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setIsScrolling(true);
    
    // Animate scroll with easing
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    const duration = 800; // ms

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, startPosition * (1 - easeOutCubic(progress)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsScrolling(false);
      }
    }

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className={`scroll-btn ${isScrolling ? 'scrolling' : ''}`} 
          title="Go to top"
          disabled={isScrolling}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="scroll-icon"
          >
            <path 
              d="M12 5l-7 7h4v5h6v-5h4l-7-7z" 
              fill="currentColor"
            />
          </svg>
          <div className="scroll-progress"></div>
        </button>
      )}
    </div>
  );
} 