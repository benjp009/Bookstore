import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/books/books';
import BookCompletion from './BookCompletion';
import BookProgress from './BookProgress';

const Book = ({
  // eslint-disable-next-line camelcase
  item_id, author, title, category,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBookAPI(item_id));
  };
  return (
    <>
      <div className="oneBook">
        <div className="oneBookTitle">
          <div>
            <li className="newBook">
              <p className="newBookCategory">{category}</p>
              <p className="newBookTitle">{title}</p>
              <p className="newBookAuthor">{author}</p>
            </li>
          </div>
          <div className="oneBookButton">
            <button type="button" className="actionButton">Comment</button>
            <button type="button" className="delBtn actionButton" onClick={() => { handleDelete(item_id); }}>Remove</button>
            <button type="button" className="actionButton">Edit</button>
          </div>
        </div>

        <div className="completion">
          <BookCompletion />
        </div>
        <div className="vl" />
        <div className="progress">
          <BookProgress />
        </div>
      </div>
    </>
  );
};
Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
