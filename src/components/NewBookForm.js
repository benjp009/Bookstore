import React, { useState } from 'react';
import './NewBookForm.css';

export default function NewBookForm() {
  const [bookCategory, setCategory] = useState('Category');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className="book-form">
      <h2>Add New Book</h2>
      <form>
        <input type="text" id="book-title" name="book-title" placeholder="Book Title" />
        <select value={bookCategory} onChange={handleChange} id="book-category" name="book-category">
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <input type="button" id="submit-new-book" value="Add Book" />
      </form>
    </div>
  );
}
