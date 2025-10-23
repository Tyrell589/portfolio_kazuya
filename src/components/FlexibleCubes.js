/**
 * @fileoverview Flexible cubes animation component
 * Creates 3D-like flexible cubes that change shape and move around
 */

import React, { useEffect, useRef } from 'react';

const FlexibleCubes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create multiple flexible cubes
    const createCube = (index) => {
      const cube = document.createElement('div');
      cube.className = 'flexible-cube';
      
      // Random positioning
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 100 + 50;
      
      // Random colors
      const colors = [
        'rgba(255, 88, 35, 0.1)',   // Orange
        'rgba(147, 51, 234, 0.1)',  // Purple
        'rgba(59, 130, 246, 0.1)',  // Blue
        'rgba(16, 185, 129, 0.1)',  // Green
        'rgba(245, 158, 11, 0.1)',  // Yellow
        'rgba(236, 72, 153, 0.1)',  // Pink
      ];
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      cube.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border: 1px solid rgba(255, 255, 255, 0.1);
        transform-origin: center;
        animation: flexibleCube${index} ${8 + Math.random() * 12}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
        pointer-events: none;
        z-index: 1;
      `;
      
      container.appendChild(cube);
    };

    // Create 12 flexible cubes
    for (let i = 0; i < 12; i++) {
      createCube(i);
    }

    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes flexibleCube0 {
        0%, 100% { 
          transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg, 0deg);
          border-radius: 0%;
        }
        25% { 
          transform: translate(20px, -30px) rotate(90deg) scale(1.2) skew(10deg, 5deg);
          border-radius: 20%;
        }
        50% { 
          transform: translate(-15px, 20px) rotate(180deg) scale(0.8) skew(-5deg, 10deg);
          border-radius: 50%;
        }
        75% { 
          transform: translate(30px, 10px) rotate(270deg) scale(1.1) skew(5deg, -5deg);
          border-radius: 30%;
        }
      }
      
      @keyframes flexibleCube1 {
        0%, 100% { 
          transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg, 0deg);
          border-radius: 0%;
        }
        20% { 
          transform: translate(-25px, -20px) rotate(72deg) scale(1.3) skew(-10deg, 8deg);
          border-radius: 25%;
        }
        40% { 
          transform: translate(35px, -10px) rotate(144deg) scale(0.7) skew(8deg, -12deg);
          border-radius: 40%;
        }
        60% { 
          transform: translate(-20px, 25px) rotate(216deg) scale(1.4) skew(-8deg, 6deg);
          border-radius: 60%;
        }
        80% { 
          transform: translate(15px, 30px) rotate(288deg) scale(0.9) skew(12deg, -8deg);
          border-radius: 35%;
        }
      }
      
      @keyframes flexibleCube2 {
        0%, 100% { 
          transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg, 0deg);
          border-radius: 0%;
        }
        33% { 
          transform: translate(40px, -25px) rotate(120deg) scale(1.5) skew(15deg, -10deg);
          border-radius: 45%;
        }
        66% { 
          transform: translate(-30px, 35px) rotate(240deg) scale(0.6) skew(-15deg, 12deg);
          border-radius: 25%;
        }
      }
      
      @keyframes flexibleCube3 {
        0%, 100% { 
          transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg, 0deg);
          border-radius: 0%;
        }
        16% { 
          transform: translate(-35px, -15px) rotate(60deg) scale(1.2) skew(-12deg, 10deg);
          border-radius: 30%;
        }
        32% { 
          transform: translate(25px, -35px) rotate(120deg) scale(0.8) skew(10deg, -15deg);
          border-radius: 50%;
        }
        48% { 
          transform: translate(45px, 20px) rotate(180deg) scale(1.6) skew(8deg, 12deg);
          border-radius: 20%;
        }
        64% { 
          transform: translate(-20px, 40px) rotate(240deg) scale(0.7) skew(-10deg, 8deg);
          border-radius: 40%;
        }
        80% { 
          transform: translate(30px, 25px) rotate(300deg) scale(1.3) skew(12deg, -10deg);
          border-radius: 35%;
        }
      }
      
      @keyframes flexibleCube4 {
        0%, 100% { 
          transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg, 0deg);
          border-radius: 0%;
        }
        14% { 
          transform: translate(30px, -40px) rotate(50deg) scale(1.4) skew(18deg, -12deg);
          border-radius: 40%;
        }
        28% { 
          transform: translate(-40px, -20px) rotate(100deg) scale(0.9) skew(-15deg, 18deg);
          border-radius: 25%;
        }
        42% { 
          transform: translate(20px, 45px) rotate(150deg) scale(1.7) skew(12deg, -18deg);
          border-radius: 55%;
        }
        56% { 
          transform: translate(-25px, 30px) rotate(200deg) scale(0.6) skew(-18deg, 15deg);
          border-radius: 30%;
        }
        70% { 
          transform: translate(45px, -10px) rotate(250deg) scale(1.1) skew(15deg, -12deg);
          border-radius: 45%;
        }
        84% { 
          transform: translate(-15px, -30px) rotate(300deg) scale(1.5) skew(-12deg, 18deg);
          border-radius: 35%;
        }
      }
      
      @keyframes flexibleCube5 {
        0%, 100% { 
          transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg, 0deg);
          border-radius: 0%;
        }
        12% { 
          transform: translate(-45px, -30px) rotate(40deg) scale(1.6) skew(-20deg, 15deg);
          border-radius: 35%;
        }
        24% { 
          transform: translate(35px, -45px) rotate(80deg) scale(0.8) skew(15deg, -20deg);
          border-radius: 50%;
        }
        36% { 
          transform: translate(50px, 15px) rotate(120deg) scale(1.8) skew(18deg, 15deg);
          border-radius: 20%;
        }
        48% { 
          transform: translate(-30px, 50px) rotate(160deg) scale(0.7) skew(-15deg, 20deg);
          border-radius: 60%;
        }
        60% { 
          transform: translate(25px, 35px) rotate(200deg) scale(1.3) skew(20deg, -15deg);
          border-radius: 25%;
        }
        72% { 
          transform: translate(-40px, 20px) rotate(240deg) scale(1.9) skew(-18deg, 20deg);
          border-radius: 45%;
        }
        84% { 
          transform: translate(40px, -25px) rotate(280deg) scale(0.9) skew(15deg, -18deg);
          border-radius: 30%;
        }
      }
      
      @keyframes flexibleCube6 {
        0%, 100% { 
          transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg, 0deg);
          border-radius: 0%;
        }
        10% { 
          transform: translate(50px, -35px) rotate(30deg) scale(1.7) skew(22deg, -15deg);
          border-radius: 40%;
        }
        20% { 
          transform: translate(-35px, -50px) rotate(60deg) scale(0.9) skew(-18deg, 22deg);
          border-radius: 25%;
        }
        30% { 
          transform: translate(40px, 25px) rotate(90deg) scale(1.9) skew(20deg, 18deg);
          border-radius: 55%;
        }
        40% { 
          transform: translate(-25px, 45px) rotate(120deg) scale(0.8) skew(-20deg, 22deg);
          border-radius: 30%;
        }
        50% { 
          transform: translate(45px, -20px) rotate(150deg) scale(1.4) skew(22deg, -18deg);
          border-radius: 45%;
        }
        60% { 
          transform: translate(-30px, -40px) rotate(180deg) scale(2.0) skew(-22deg, 20deg);
          border-radius: 20%;
        }
        70% { 
          transform: translate(35px, 30px) rotate(210deg) scale(1.1) skew(18deg, -22deg);
          border-radius: 50%;
        }
        80% { 
          transform: translate(-40px, 15px) rotate(240deg) scale(1.8) skew(-20deg, 18deg);
          border-radius: 35%;
        }
        90% { 
          transform: translate(30px, -45px) rotate(270deg) scale(0.7) skew(22deg, -20deg);
          border-radius: 40%;
        }
      }
      
      @keyframes flexibleCube7 {
        0%, 100% { 
          transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg, 0deg);
          border-radius: 0%;
        }
        11% { 
          transform: translate(-50px, -40px) rotate(25deg) scale(1.8) skew(-25deg, 18deg);
          border-radius: 45%;
        }
        22% { 
          transform: translate(40px, -55px) rotate(50deg) scale(0.8) skew(20deg, -25deg);
          border-radius: 30%;
        }
        33% { 
          transform: translate(55px, 20px) rotate(75deg) scale(2.1) skew(25deg, 20deg);
          border-radius: 60%;
        }
        44% { 
          transform: translate(-30px, 50px) rotate(100deg) scale(0.9) skew(-22deg, 25deg);
          border-radius: 25%;
        }
        55% { 
          transform: translate(50px, -25px) rotate(125deg) scale(1.5) skew(22deg, -20deg);
          border-radius: 50%;
        }
        66% { 
          transform: translate(-35px, -45px) rotate(150deg) scale(2.2) skew(-25deg, 22deg);
          border-radius: 35%;
        }
        77% { 
          transform: translate(45px, 35px) rotate(175deg) scale(1.2) skew(25deg, -22deg);
          border-radius: 40%;
        }
        88% { 
          transform: translate(-40px, 25px) rotate(200deg) scale(1.9) skew(-20deg, 25deg);
          border-radius: 30%;
        }
      }
      
      @keyframes flexibleCube8 {
        0%, 100% { 
          transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg, 0deg);
          border-radius: 0%;
        }
        9% { 
          transform: translate(55px, -45px) rotate(20deg) scale(1.9) skew(28deg, -18deg);
          border-radius: 50%;
        }
        18% { 
          transform: translate(-40px, -60px) rotate(40deg) scale(0.9) skew(-25deg, 28deg);
          border-radius: 35%;
        }
        27% { 
          transform: translate(60px, 25px) rotate(60deg) scale(2.3) skew(28deg, 25deg);
          border-radius: 65%;
        }
        36% { 
          transform: translate(-35px, 55px) rotate(80deg) scale(1.0) skew(-28deg, 28deg);
          border-radius: 30%;
        }
        45% { 
          transform: translate(50px, -30px) rotate(100deg) scale(1.6) skew(25deg, -25deg);
          border-radius: 45%;
        }
        54% { 
          transform: translate(-45px, -50px) rotate(120deg) scale(2.4) skew(-28deg, 25deg);
          border-radius: 25%;
        }
        63% { 
          transform: translate(40px, 40px) rotate(140deg) scale(1.3) skew(28deg, -28deg);
          border-radius: 55%;
        }
        72% { 
          transform: translate(-50px, 30px) rotate(160deg) scale(2.0) skew(-25deg, 28deg);
          border-radius: 40%;
        }
        81% { 
          transform: translate(35px, -50px) rotate(180deg) scale(0.8) skew(28deg, -25deg);
          border-radius: 35%;
        }
        90% { 
          transform: translate(-30px, -35px) rotate(200deg) scale(2.1) skew(-28deg, 25deg);
          border-radius: 50%;
        }
      }
      
      @keyframes flexibleCube9 {
        0%, 100% { 
          transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg, 0deg);
          border-radius: 0%;
        }
        8% { 
          transform: translate(-60px, -50px) rotate(15deg) scale(2.0) skew(-30deg, 20deg);
          border-radius: 55%;
        }
        16% { 
          transform: translate(45px, -65px) rotate(30deg) scale(1.0) skew(25deg, -30deg);
          border-radius: 40%;
        }
        24% { 
          transform: translate(65px, 30px) rotate(45deg) scale(2.5) skew(30deg, 25deg);
          border-radius: 70%;
        }
        32% { 
          transform: translate(-40px, 60px) rotate(60deg) scale(1.1) skew(-30deg, 30deg);
          border-radius: 35%;
        }
        40% { 
          transform: translate(55px, -35px) rotate(75deg) scale(1.7) skew(30deg, -25deg);
          border-radius: 50%;
        }
        48% { 
          transform: translate(-50px, -55px) rotate(90deg) scale(2.6) skew(-30deg, 30deg);
          border-radius: 30%;
        }
        56% { 
          transform: translate(50px, 45px) rotate(105deg) scale(1.4) skew(30deg, -30deg);
          border-radius: 60%;
        }
        64% { 
          transform: translate(-45px, 40px) rotate(120deg) scale(2.1) skew(-25deg, 30deg);
          border-radius: 45%;
        }
        72% { 
          transform: translate(40px, -55px) rotate(135deg) scale(0.9) skew(30deg, -30deg);
          border-radius: 40%;
        }
        80% { 
          transform: translate(-35px, -40px) rotate(150deg) scale(2.2) skew(-30deg, 25deg);
          border-radius: 55%;
        }
        88% { 
          transform: translate(60px, -25px) rotate(165deg) scale(1.8) skew(25deg, -30deg);
          border-radius: 35%;
        }
        96% { 
          transform: translate(-30px, -60px) rotate(180deg) scale(2.3) skew(-30deg, 30deg);
          border-radius: 50%;
        }
      }
      
      @keyframes flexibleCube10 {
        0%, 100% { 
          transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg, 0deg);
          border-radius: 0%;
        }
        7% { 
          transform: translate(70px, -55px) rotate(10deg) scale(2.1) skew(35deg, -20deg);
          border-radius: 60%;
        }
        14% { 
          transform: translate(-50px, -70px) rotate(20deg) scale(1.1) skew(-30deg, 35deg);
          border-radius: 45%;
        }
        21% { 
          transform: translate(70px, 35px) rotate(30deg) scale(2.7) skew(35deg, 30deg);
          border-radius: 75%;
        }
        28% { 
          transform: translate(-45px, 70px) rotate(40deg) scale(1.2) skew(-35deg, 35deg);
          border-radius: 40%;
        }
        35% { 
          transform: translate(60px, -40px) rotate(50deg) scale(1.8) skew(35deg, -30deg);
          border-radius: 55%;
        }
        42% { 
          transform: translate(-55px, -60px) rotate(60deg) scale(2.8) skew(-35deg, 35deg);
          border-radius: 35%;
        }
        49% { 
          transform: translate(55px, 50px) rotate(70deg) scale(1.5) skew(35deg, -35deg);
          border-radius: 65%;
        }
        56% { 
          transform: translate(-50px, 45px) rotate(80deg) scale(2.3) skew(-30deg, 35deg);
          border-radius: 50%;
        }
        63% { 
          transform: translate(45px, -60px) rotate(90deg) scale(1.0) skew(35deg, -35deg);
          border-radius: 45%;
        }
        70% { 
          transform: translate(-40px, -50px) rotate(100deg) scale(2.4) skew(-35deg, 30deg);
          border-radius: 60%;
        }
        77% { 
          transform: translate(70px, -30px) rotate(110deg) scale(1.9) skew(30deg, -35deg);
          border-radius: 40%;
        }
        84% { 
          transform: translate(-35px, -70px) rotate(120deg) scale(2.5) skew(-35deg, 35deg);
          border-radius: 55%;
        }
        91% { 
          transform: translate(50px, -45px) rotate(130deg) scale(1.3) skew(35deg, -30deg);
          border-radius: 50%;
        }
      }
      
      @keyframes flexibleCube11 {
        0%, 100% { 
          transform: translate(0, 0) rotate(0deg) scale(1) skew(0deg, 0deg);
          border-radius: 0%;
        }
        6% { 
          transform: translate(-70px, -60px) rotate(5deg) scale(2.2) skew(-40deg, 25deg);
          border-radius: 65%;
        }
        12% { 
          transform: translate(55px, -75px) rotate(10deg) scale(1.2) skew(35deg, -40deg);
          border-radius: 50%;
        }
        18% { 
          transform: translate(75px, 40px) rotate(15deg) scale(2.9) skew(40deg, 35deg);
          border-radius: 80%;
        }
        24% { 
          transform: translate(-50px, 75px) rotate(20deg) scale(1.3) skew(-40deg, 40deg);
          border-radius: 45%;
        }
        30% { 
          transform: translate(65px, -50px) rotate(25deg) scale(1.9) skew(40deg, -35deg);
          border-radius: 60%;
        }
        36% { 
          transform: translate(-60px, -65px) rotate(30deg) scale(3.0) skew(-40deg, 40deg);
          border-radius: 40%;
        }
        42% { 
          transform: translate(60px, 55px) rotate(35deg) scale(1.6) skew(40deg, -40deg);
          border-radius: 70%;
        }
        48% { 
          transform: translate(-55px, 50px) rotate(40deg) scale(2.5) skew(-35deg, 40deg);
          border-radius: 55%;
        }
        54% { 
          transform: translate(50px, -65px) rotate(45deg) scale(1.1) skew(40deg, -40deg);
          border-radius: 50%;
        }
        60% { 
          transform: translate(-45px, -55px) rotate(50deg) scale(2.6) skew(-40deg, 35deg);
          border-radius: 65%;
        }
        66% { 
          transform: translate(75px, -35px) rotate(55deg) scale(2.0) skew(35deg, -40deg);
          border-radius: 45%;
        }
        72% { 
          transform: translate(-40px, -75px) rotate(60deg) scale(2.7) skew(-40deg, 40deg);
          border-radius: 60%;
        }
        78% { 
          transform: translate(55px, -50px) rotate(65deg) scale(1.4) skew(40deg, -35deg);
          border-radius: 55%;
        }
        84% { 
          transform: translate(-35px, -60px) rotate(70deg) scale(2.8) skew(-40deg, 40deg);
          border-radius: 50%;
        }
        90% { 
          transform: translate(70px, -40px) rotate(75deg) scale(1.7) skew(35deg, -40deg);
          border-radius: 65%;
        }
        96% { 
          transform: translate(-50px, -70px) rotate(80deg) scale(2.9) skew(-40deg, 35deg);
          border-radius: 45%;
        }
      }
    `;
    
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
      // Clear cubes
      const cubes = container.querySelectorAll('.flexible-cube');
      cubes.forEach(cube => cube.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ background: 'transparent' }}
    />
  );
};

export default FlexibleCubes;
