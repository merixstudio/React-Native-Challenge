import axios from 'axios';

const prefix = '[books]';
const googleApiUrl = 'https://www.googleapis.com/books/v1';

export const booksActionsTypes = {
  SEARCH_REQUEST: `${prefix} Search Request`,
  SEARCH_SUCCESS: `${prefix} Search Success`,
  SEARCH_ERROR: `${prefix} Search Error`,

  BOOK_DETAILS_REQUEST: `${prefix} BOOK Details Request`,
  BOOK_DETAILS_SUCCESS: `${prefix} BOOK Details Success`,
  BOOK_DETAILS_ERROR: `${prefix} BOOK Details Error`,
};

export const searchRequest = () => ({
  type: booksActionsTypes.SEARCH_REQUEST,
});
export const searchSuccess = payload => ({ type: booksActionsTypes.SEARCH_SUCCESS, payload });
export const searchError = payload => ({ type: booksActionsTypes.SEARCH_ERROR, payload });

export const bookDetailsRequest = () => ({ type: booksActionsTypes.BOOK_DETAILS_REQUEST });
export const bookDetailsSuccess = payload => ({
  type: booksActionsTypes.BOOK_DETAILS_SUCCESS,
  payload,
});
export const bookDetailsError = payload => (
  { type: booksActionsTypes.BOOK_DETAILS_ERROR, payload }
);


export const fetchBooks = (searchPhrase) => {
  return async (dispatch) => {
    dispatch(searchRequest());
    const response = await axios.get(`${googleApiUrl}/volumes?q=${searchPhrase}`);
    if (response.status === 200) {
      return dispatch(searchSuccess(response.data));
    }
    return dispatch(searchError(response.data));
  };
};

export const fetchBookDetails = (bookId) => {
  return async (dispatch) => {
    dispatch(bookDetailsRequest());
    const response = await axios.get(`${googleApiUrl}/volumes/${bookId}`);
    if (response.status === 200) {
      return dispatch(bookDetailsSuccess(response.data));
    }
    return dispatch(bookDetailsError(response.data));
  };
};
