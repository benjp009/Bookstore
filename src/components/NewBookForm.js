import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

import './NewBookForm.css';

export default function NewBookForm() {

  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const [authorError, setAuthorError] = useState('');
  const [titleError, setTitleError] = useState('');
  const dispatch = useDispatch();
  const bookCategories = ['Action', 'Science Fiction', 'Fantasy', 'Economy', 'Business'];

  const handleChangeTitle = (event) => {
    setBookTitle(event.target.value);
    setTitleError('');
  }

  const handleChangeAuthor = (event) => {
    setBookAuthor(event.target.value);
    setAuthorError('');
  }

  const handleChangeCategory = (event) => {
    setBookCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let error = false;
    if (bookTitle.trim() === '') {
      error = true;
      setTitleError('Please enter your title');
    }
    if (bookAuthor.trim() === '') {
      error = true;
      setAuthorError('Please enter your author');
    }
    if (!error) {
      const formData = {
        id: uuidv4(), bookTitle, bookAuthor, bookCategory,
      };
      dispatch(addBook(formData));
      setBookTitle('');
      setBookAuthor('');
      setBookCategory('');
      setTitleError('');
      setAuthorError('');
    }
  };
  return (
    <div className="book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="book-title"
          value={bookTitle}
          onChange={handleChangeTitle}
          placeholder="Book Title"
        />
        <span>
          {authorError}
          {' '}
        </span>
        <input
          type="text"
          id="book-author"
          value={bookAuthor}
          onChange={handleChangeAuthor}
          placeholder="Book Author"
        />
        <span>
          {titleError}
          {' '}
        </span>
        <select
          value={bookCategory}
          onChange={handleChangeCategory}
          id="book-category"
          name="book-category"
        >
          {
            bookCategories.map((bookCategory) => (
              <option
                key={bookCategory}
                value={bookCategory}
              >
                {bookCategory}
              </option>
            ))
          }
        </select>
        <input type="submit" id="submit-new-book" value="Add Book" />
      </form>
    </div>
  );
}
