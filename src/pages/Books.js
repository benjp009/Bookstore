import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../components/NewBookForm';
import Book from '../components/Book';
import './Books.css';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div class="book-display">
      <h2 class="title">List of Books</h2>
      <div class="new-book">
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            author={book.author}
            title={book.title}
            id={book.id}
            category={book.category}
          />
        ))}
      </ul>
      </div>
      <Form />
    </div>
  );
};

export default BookList;
