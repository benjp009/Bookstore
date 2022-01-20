import React from 'react';

export default function BookCompletion() {
  return (
    <div className="completion">
      <div className="round">
      <svg
        class="progress-ring"
        height="80"
        width="80"
      >
      <circle
        class="progress-ring__circle"
        stroke="#e8e8e8"
        stroke-width="3"
        fill="transparent"
        r="38"
        cx="40"
        cy="40"
      />
      </svg>
      </div>
      <div>
        <h2>64%</h2>
        <p>Completed</p>
      </div>
    </div>
  );
}
