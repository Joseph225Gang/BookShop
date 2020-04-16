import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { act } from "react-test-renderer";

export default function bookReducer(state = initialState.books, action) {
  switch (action.type) {
    case types.GET_ALL_BOOKS:
      return action.books;
    case types.UPDATE_BOOK_PRICE:
        return state.map(book =>
          book.id === action.book.id ? action.book : book
        )
    case types.DELETE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
}
