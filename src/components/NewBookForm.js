import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [authorError, setAuthorError] = useState('');
  const [titleError, setTitleError] = useState('');
  const dispatch = useDispatch();
  const categories = ['Beauty', 'Movie'];
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
    setAuthorError('');
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    setTitleError('');
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = false;
    if (title.trim() === '') {
      error = true;
      setTitleError('Please enter your title');
    }
    if (author.trim() === '') {
      error = true;
      setAuthorError('Please enter your author');
    }
    if (!error) {
      const formData = {
        id: uuidv4(), title, author, category,
      };
      dispatch(addBook(formData));
      setTitle('');
      setAuthor('');
      setCategory('');
      setTitleError('');
      setAuthorError('');
    }
  };
  return (
    <div className="book-form">
      <h2 className="title">Add New Book</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="">
          <input
            type="text"
            placeholder="Enter name of author"
            id="author"
            onChange={handleChangeAuthor}
            value={author}
            required
          />
          <span>
            {authorError}
            {' '}
          </span>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter name of title"
            id="title"
            onChange={handleChangeTitle}
            value={title}
            required
          />
        </div>
        <span>{titleError}</span>
        <select onChange={handleChangeCategory} value={category}>
          {
            categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
        <button type="button" className="addBtn" onClick={handleSubmit}>Add Book</button>

      </form>
    </div>
  );
};
export default Form;
