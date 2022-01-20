import React from 'react';

export default function BookCompletion() {
  return (
    <div className="completion">
      <div className="round">
        <svg
          className="progress-ring"
          height="80"
          width="80"
        >
          <circle
            className="progress-ring__circle"
            stroke="#e8e8e8"
            strokeWidth="3"
            fill="transparent"
            r="38"
            cx="40"
            cy="40"
          />
        </svg>
      </div>
      <div>
        <h2>0%</h2>
        <p>Completed</p>
      </div>
    </div>
  );
}
