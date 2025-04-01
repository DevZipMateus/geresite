
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface ValidityCountdownProps {
  expirationDate: string;
}

const ValidityCountdown: React.FC<ValidityCountdownProps> = ({ expirationDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const expiration = new Date(expirationDate);
      const now = new Date();
      
      const difference = expiration.getTime() - now.getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      // Cálculo dos dias, horas, minutos e segundos restantes
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      return { days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [expirationDate]);

  // Classes CSS condicionais para mudar a cor conforme o tempo restante
  const getColorClass = () => {
    if (timeLeft.days === 0) {
      if (timeLeft.hours < 12) {
        return "text-red-500 border-red-300 bg-red-50";
      }
      return "text-orange-500 border-orange-300 bg-orange-50";
    }
    return "text-primary border-primary/30 bg-primary/5";
  };

  return (
    <div className={`flex items-center gap-3 rounded-lg border p-3 ${getColorClass()} transition-colors`}>
      <Clock className="h-5 w-5" />
      <div>
        <h3 className="text-sm font-medium">Validade do site</h3>
        {isExpired ? (
          <p className="text-red-600 font-semibold">Expirado</p>
        ) : (
          <div className="flex gap-2 mt-1">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{timeLeft.days}</span>
              <span className="text-xs">dias</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{timeLeft.hours}</span>
              <span className="text-xs">horas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{timeLeft.minutes}</span>
              <span className="text-xs">min</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{timeLeft.seconds}</span>
              <span className="text-xs">seg</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValidityCountdown;
