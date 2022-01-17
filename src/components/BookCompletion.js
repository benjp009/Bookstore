import React from 'react';

export default function BookCompletion() {
  return (
    <div className="completion">
      <div className="round">
        <img alt="progress" />
      </div>
      <div>
        <h2>64%</h2>
        <p>Completed</p>
      </div>
    </div>
  );
}