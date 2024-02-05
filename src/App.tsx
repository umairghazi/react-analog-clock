import { useState, useEffect } from 'react';
import './App.css';


const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
  const minuteDegrees = minutes * 6 + seconds * 0.1;
  const secondDegrees = seconds * 6;

  const hourStyle = {
    transform: `rotate(${hourDegrees}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${minuteDegrees}deg)`,
  };

  const secondStyle = {
    transform: `rotate(${secondDegrees}deg)`,
  };

  return (
    <div className="container">
      <div className="analog-clock">
        <div className="hand hour" style={hourStyle}></div>
        <div className="hand minute" style={minuteStyle}></div>
        <div className="hand second" style={secondStyle}></div>
      </div>
    </div>
  );
};

export default AnalogClock;
