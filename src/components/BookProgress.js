import React from 'react';

export default function BookProgress() {
  return (
    <div className="progress">
      <h2 className="progressCurrent">Current Chapter</h2>
      <h3 className="progressChapter">Chapter 17</h3>
      <button className="progressButton" type="button">Update Progress</button>
    </div>
  );
}
