import * as types from './actionTypes';
import * as bookApi from "../api/bookApi";

const loadBooksAction = books => ({
    type: types.GET_ALL_BOOKS,
    books
  })
  export function loadBooks() {
    return function(dispatch) {
      return bookApi
        .getBooks()
        .then(books => {
          dispatch(loadBooksAction(books));
        })
        .catch(error => {
          throw error;
        });
    };
  }


  const BuyBooksAction = bookId => ({
    type: types.BUY_BOOK,
    bookId
  })

  export const addToBook = bookId => (dispatch) => {
      dispatch(BuyBooksAction(bookId))
  }

  const updateBookAction = book => ({
    type: types.UPDATE_BOOK_PRICE,
    book
  });

  export function updateBook(book) {
    //eslint-disable-next-line no-unused-vars
    return function(dispatch) {
      return bookApi
        .save(book)
        .then(book => {
            dispatch(updateBookAction(book))
        })
        .catch(error => {
          throw error;
        });
    };
  }

  const deleteBookAction = book => ({
    type: types.DELETE_BOOK,
    book
  });

  export function deleteBook(bookId) {
    //eslint-disable-next-line no-unused-vars
    return function(dispatch) {
      return bookApi
        .deleteBook(bookId)
        .then(book => {
            dispatch(deleteBookAction(book))
        })
        .catch(error => {
          throw error;
        });
    };
  }
  