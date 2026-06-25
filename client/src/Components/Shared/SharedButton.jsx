import React from 'react';
import '../../index.css'

const SharedButton = ({ text }) => {
    return (
    <>
      <a  className="glow-btn">
        <span className="glow-text">
          {text}
          <svg className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </a>
 
      <style>{`
        .glow-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 36px;
          border-radius: 12px;
          cursor: pointer;
          text-decoration: none;
          background: linear-gradient(135deg, #0ea5c9, #06b6d4, #22d3ee);
          transition: transform 0.2s ease;
        }
 
        /* Outer glow layer — animates left to right */
        .glow-btn::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 14px;
          z-index: -1;
          background: linear-gradient(90deg, #0ea5c9, #22d3ee, #0ea5c9);
          background-size: 200% 100%;
          filter: blur(14px);
          opacity: 0.85;
          animation: glowSlide 2s linear infinite;
        }
 
        @keyframes glowSlide {
          0%   { background-position: 0% 50%;   filter: blur(10px); opacity: 0.6; }
          50%  { background-position: 100% 50%; filter: blur(18px); opacity: 1;   }
          100% { background-position: 0% 50%;   filter: blur(10px); opacity: 0.6; }
        }
 
        .glow-btn:hover {
          transform: translateY(-2px);
        }
 
        .glow-btn:hover::before {
          filter: blur(22px);
          opacity: 1;
        }
 
        .glow-btn:active {
          transform: translateY(0);
        }
 
        .glow-text {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
 
        .arrow-icon {
          width: 18px;
          height: 18px;
          transition: transform 0.2s ease;
        }
 
        .glow-btn:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </>
  );
}
export default SharedButton;