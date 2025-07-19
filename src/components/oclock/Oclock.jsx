import React, { useEffect, useState } from 'react';
import "./Oclock.css";

const TEN_DAYS_MS = 10 * 24 * 60 * 60 * 1000;
const STORAGE_KEY = 'oclock_target_time';

const Oclock = () => {
  const getInitialTargetTime = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return parseInt(saved, 10);
    } else {
      const newTarget = Date.now() + TEN_DAYS_MS;
      localStorage.setItem(STORAGE_KEY, newTarget);
      return newTarget;
    }
  };

  const [targetTime, setTargetTime] = useState(getInitialTargetTime());

  const getTimeLeft = () => {
    const now = Date.now();
    const diff = targetTime - now;

    if (diff <= 0) {
      // vaqt tugagan – yana 10 kun qo‘sh
      const newTarget = Date.now() + TEN_DAYS_MS;
      localStorage.setItem(STORAGE_KEY, newTarget);
      setTargetTime(newTarget);
      return {
        days: '10',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0'),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className="three-sales-oclock">
      <h2>
        <span>Days</span>
        {timeLeft.days}
      </h2>
      <span className="double-dot">:</span>
      <h2>
        <span>Hours</span>
        {timeLeft.hours}
      </h2>
      <span className="double-dot">:</span>
      <h2>
        <span>Minutes</span>
        {timeLeft.minutes}
      </h2>
      <span className="double-dot">:</span>
      <h2>
        <span>Seconds</span>
        {timeLeft.seconds}
      </h2>
    </div>
  );
};

export default Oclock;
