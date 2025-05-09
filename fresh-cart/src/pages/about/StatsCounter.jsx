import React, { useEffect, useRef } from 'react';
import './StatsCounter.css'; // optional: for styling

const statsData = [
  { number: 150000, label: "Happy Clients", suffix: "K" },
  { number: 30, label: "Products", suffix: "+" },
  { number: 200000, label: "Products Delivered", suffix: "K" },
  { number: 85, label: "Team Members", suffix: "+" },
];

const StatsCounter = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((el, index) => {
      const target = statsData[index].number;
      const suffix = statsData[index].suffix;
      let count = 0;
      const speed = 100;
      const increment = target / speed;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          el.innerText =
            target >= 1000
              ? `${Math.ceil(count / 1000)}${suffix}`
              : `${Math.ceil(count)}${suffix}`;
          requestAnimationFrame(updateCount);
        } else {
          el.innerText =
            target >= 1000
              ? `${target / 1000}${suffix}`
              : `${target}${suffix}`;
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div className="stats-row">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-block">
          <span
            className="stat-number"
            ref={(el) => (countersRef.current[index] = el)}
          >
            0
          </span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;
