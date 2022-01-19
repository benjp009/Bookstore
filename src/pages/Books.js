import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../components/NewBookForm';
import Book from '../components/Book';
import { fetchBookAPI } from '../redux/books/books';
import './Books.css';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookAPI());
  }, [dispatch]);
  return (
    <div className="book-display">
      <h2 className="title">List of Books</h2>
      <div className="new-book">
        <ul>
          {books.map((book) => (
            <Book
              key={book.item_id}
              author={book.author}
              title={book.title}
              item_id={book.item_id}
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
