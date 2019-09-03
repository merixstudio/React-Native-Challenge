import { booksActionsTypes } from '../actions/bookActions';

const INITIAL_STATE = {
  current: null,
  results: null,
  query: null,
  error: null,
  isFetching: false,
};

const bookReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case booksActionsTypes.SEARCH_REQUEST: {
      return {
        ...state,
        error: null,
        query: payload,
        isFetching: true,
      };
    }
    case booksActionsTypes.SEARCH_SUCCESS: {
      return {
        ...state,
        results: payload,
        isFetching: false,
      };
    }
    case booksActionsTypes.BOOK_DETAILS_REQUEST: {
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    }
    case booksActionsTypes.BOOK_DETAILS_SUCCESS: {
      return {
        ...state,
        current: payload,
        isFetching: false,
      };
    }
    case booksActionsTypes.SEARCH_ERROR:
    case booksActionsTypes.BOOK_DETAILS_ERROR: {
      return {
        ...state,
        error: payload,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default bookReducer;
