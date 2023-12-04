import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(10);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(intervalId);
        navigate('/home');
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, navigate]);

  return (
    <div className="text-center mt-6">
      <div className="text-7xl font-semibold text-[#fe000]">{seconds}s</div>
    </div>
  );
};

export default Timer;
