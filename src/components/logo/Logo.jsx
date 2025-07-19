// Logo.js
import React, { useRef } from 'react';
import './Logo.css';

function Logo() {
  const textRef = useRef(null);

  const restartAnimation = () => {
    const el = textRef.current;
    if (!el) return;

    el.style.animationName = 'none';
    requestAnimationFrame(() => {
      setTimeout(() => {
        el.style.animationName = 'textStrokeAnim';
      }, 0);
    });
  };

  return (
    <div className="logo-container">
      <svg
        className="text-stroke"
        ref={textRef}
        viewBox="0 0 500 100"
        width="80%"
        height="100%"
      >
        <text x="20" y="75">Exclusive</text>
      </svg>
{/* 
      <button className="reset" onClick={restartAnimation}>
        Qayta boshlash
      </button> */}
    </div>
  );
}

export default Logo;
