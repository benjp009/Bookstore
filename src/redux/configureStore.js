import {
  createStore,
  combineStore,
  applyMiddleware,
 } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = conbineReducers({
  booksReducer
});

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

export default store;
