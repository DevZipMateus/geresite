
import React from 'react';

interface AuroraProps {
  colorStops: string[];
  amplitude: number;
  blend: number;
  speed: number;
}

const Aurora: React.FC<AuroraProps> = ({ colorStops, amplitude, blend, speed }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `linear-gradient(45deg, ${colorStops.join(', ')})`,
          animation: `aurora ${10 / speed}s ease-in-out infinite alternate`,
        }}
      />
      <style jsx>{`
        @keyframes aurora {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: ${blend * 0.5};
          }
          100% {
            transform: scale(${1 + amplitude * 0.1}) rotate(${amplitude * 10}deg);
            opacity: ${blend};
          }
        }
      `}</style>
    </div>
  );
};

export default Aurora;
