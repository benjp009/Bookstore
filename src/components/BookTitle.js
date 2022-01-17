import React from 'react';

export default function BookTitle() {
  return (
    <div className="title">
      <p>Action</p>
      <h2>The Hunger Game</h2>
      <h3>Suzanne Collins</h3>
        <div className="action">
          <button>Comments</button>
          <button>Remove</button>
          <button>Edit</button>
        </div>
    </div>
  );
}
