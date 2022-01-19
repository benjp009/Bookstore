import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import BookCompletion from './BookCompletion';
import BookProgress from './BookProgress';

const Book = ({
  id, author, title, category,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <div className="oneBook">
        <div>
          <li className="newBook">
            <p>{title}</p>
            <p>{author}</p>
            <p>{category}</p>
            <button type="button" className="delBtn" onClick={() => { handleDelete(id); }}>Remove</button>
          </li>
        </div>
        <div className="completion">
          <BookCompletion />
        </div>
        <div className="progress">
          <BookProgress />
        </div>
      </div>
    </>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
