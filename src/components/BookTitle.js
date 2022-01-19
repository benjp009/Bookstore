// import React from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { removeBook } from '../redux/books/books';
//
// export default function BookTitle() {
//   return (
//     <div className="title">
//       <p>Action</p>
//       <h2>The Hunger Game</h2>
//       <h3>Suzanne Collins</h3>
//       <div className="action">
//         <button type="button">Comments</button>
//         <button type="button">Remove</button>
//         <button type="button">Edit</button>
//       </div>
//     </div>
//   );
// }
//
//
// export default function BookTitle({ book, onClick}) {
//   const Book = (
//     {
//       id, title, category, author
//     }) => {
//       const dispatch = useDispatch();
//       const handleDelete = () => {
//       dispatch(removeBook(id));
//     };
//     return (
//       <div className="title" id={id}>
//         <p className="category">{category}</p>
//         <h2 className="book-title">{title}</h2>
//         <h3 className="author">{author}</h3>
//         <div className="action">
//           <button type="button">Comments</button>
//           <button type="button">Remove</button>
//           <button type="button">Edit</button>
//         </div>
//       </div>
//     );
//   }
//   Book.propTypes = {
//   id: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   };
// }
