
import { booksActionsTypes } from '../actions/bookActions';

const INITIAL_STATE = {
  current: null,
  results: null,
  errors: [],
  isFetching: false,
  test: null,
};

export const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case booksActionsTypes.SEARCH_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case 'SET_TEST': {
      return {
        ...state,
        test: action.payload,
      };
    }
    case booksActionsTypes.SEARCH_SUCCESS: {
      return {
        ...state,
        results: action.payload,
        isFetching: false
      };
    }

    default:
      return state;
  }
};
