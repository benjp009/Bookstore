import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Books from './redux/books/Books';
import Categories from './redux/categories/Categories';

// Design
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="categories">Categories</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='categories' element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
};
