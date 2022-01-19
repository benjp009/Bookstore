import React, { useState } from 'react';

import './NewBookForm.css';

const randonId = () => Math.floor(Math.random() * 1000);

export default function NewBookForm(props) {

  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`New book added: ${bookTitle} written by ${bookAuthor} from ${bookCategory} category`)
  }

  return (
    <div className="book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="book-title"
          value={bookTitle}
          onChange={e => setBookTitle(e.target.value)}
          placeholder="Book Title"
        />
        <input
          type="text"
          id="book-author"
          value={bookAuthor}
          onChange={e => setBookAuthor(e.target.value)}
          placeholder="Book Author"
        />
        <select value={bookCategory} onChange={handleChange} id="book-category" name="book-category">
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <input type="submit" id="submit-new-book" value="Add Book" />
      </form>
    </div>
  );
}
