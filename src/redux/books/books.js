import Axios from 'axios';

// actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

// action creator

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

export const addBookAPI = (formData) => async (dispatch) => {
  try {
    await Axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oF2DlchTxHbEjx4GHO3I/books',
      formData);
    dispatch(addBook(formData));
  } catch (error) {
    return error;
  }
};

export const fetchBookAPI = () => async (dispatch) => {
  try {
    const { data } = await Axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oF2DlchTxHbEjx4GHO3I/books');

    const Books = Object.keys(data).map((key) => ({
      ...data[key][0],
      item_id: key,
    }));

    const payload = Object.values(Books);
    dispatch(fetchBook(payload));
  } catch (error) {
    return error;
  }
};

export const removeBookAPI = (payload) => async (dispatch) => {
  try {
    await Axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oF2DlchTxHbEjx4GHO3I/books/${payload}`);
    dispatch(removeBook(payload));
  } catch (error) {
    return error;
  }
};

// initialize State

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    case FETCH_BOOK:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
