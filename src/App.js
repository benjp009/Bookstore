import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';

// Design
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <div className="header">
          <div>
            <h1 className="headerTitle">Bookstore Ben</h1>
          </div>
          <nav className="NavContainer">
            <ul className="navBar">
              <li>
                <Link to="/" className="navItem">Books</Link>
              </li>
              <li>
                <Link to="categories" className="navItem">Categories</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}
