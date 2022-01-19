import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../components/NewBookForm';
import Book from '../components/Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <h2>List of Books</h2>
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
      <Form />
    </div>
  );
};

export default BookList;
