import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import bookReducer from './books/books';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  books: bookReducer,
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;
