import React from 'react';
import BookCompletion from './BookCompletion';
import BookProgress from './BookProgress';
import BookTitle from './BookTitle';
import './Book.css';


export default function Book() {
  return (
    <div className="book">
      <div className="title">
        <BookTitle />
      </div>
      <div className="completion">
        <BookCompletion />
      </div>
      <div className="progress">
        <BookProgress />
      </div>
    </div>
  );
}
