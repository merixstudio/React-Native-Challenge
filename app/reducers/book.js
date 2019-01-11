
import { booksActionsTypes } from '../actions/bookActions';

const INITIAL_STATE = {
  current: null,
  results: null,
  errors: [],
  isFetching: false,
};

export const bookReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case booksActionsTypes.SEARCH_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case booksActionsTypes.SEARCH_SUCCESS: {
      return {
        ...state,
        results: payload,
        isFetching: false
      };
    }
    case booksActionsTypes.BOOK_DETAILS_REQUEST: {
      return {
        ...state,
       isFetching: true
      };
    }
    case booksActionsTypes.BOOK_DETAILS_SUCCESS: {
      return {
        ...state,
        current: payload,
        isFetching: false
      };
    }

    default:
      return state;
  }
};
