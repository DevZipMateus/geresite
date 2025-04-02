
import React from 'react';

interface LogoErrorProps {
  error: string;
  logoUrl?: string;
}

const LogoError: React.FC<LogoErrorProps> = ({ error, logoUrl }) => {
  return (
    <div className="fixed top-24 left-4 z-50 bg-red-100 p-2 text-xs border border-red-300 rounded">
      <p>Logo Error: {error}</p>
      {logoUrl && <p>Logo URL in DB: {logoUrl}</p>}
    </div>
  );
};

export default LogoError;
