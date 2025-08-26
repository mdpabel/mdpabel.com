'use client';
import { useEffect, useState } from 'react';

const ReadingProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollProgress);
    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  // Circle properties
  const radius = 30; // Reduced radius for a smaller circle
  const circumference = 2 * Math.PI * radius; // Calculate circumference of the circle
  const offset = circumference - (scrollProgress / 100) * circumference; // Calculate the offset for the circle

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '70px',
        height: '70px',
        transform: 'rotate(-90deg)', // Rotate to position the stroke correctly
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 9999,
      }}
      onClick={scrollToTop} // Handle click to scroll to top
    >
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 120 120'
        xmlns='http://www.w3.org/2000/svg'
        style={{ transform: 'rotate(-90deg)' }} // Rotate to make the progress start from the top
      >
        {/* Background circle */}
        <circle
          cx='60'
          cy='60'
          r={radius}
          stroke='#ddd' // Background circle color
          strokeWidth='8'
          fill='none'
        />
        {/* Progress circle */}
        <circle
          cx='60'
          cy='60'
          r={radius}
          stroke='#8e44ad' // Purple progress color
          strokeWidth='8'
          fill='none'
          strokeDasharray={circumference} // Set the circumference as the dash length
          strokeDashoffset={offset} // Set the dash offset to control the progress
          style={{
            transition: 'stroke-dashoffset 0.25s ease', // Smooth transition when scrolling
          }}
        />
      </svg>

      {/* Scroll to top button */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(90deg)', // Added rotate to fix the arrow direction
          fontSize: '20px', // Adjusted for better appearance
          color: '#fff',
          fontWeight: 'bold',
          pointerEvents: 'none', // Prevent interference with the circle click
        }}>
        ↑ {/* Correct upward arrow */}
      </div>
    </div>
  );
};

export default ReadingProgressBar;
